class ChromeExtApi {
    static setInStorage(data) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.set(data, function () {
                    resolve();
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    static getFromStorage(data = null) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.get(data, function (items) {
                    let error = chrome.runtime.lastError;
                    
                    if (error) {
                        throw error;
                    }

                    if (data) {
                        items = items[data];
                    }

                    resolve(items);
                });
            } catch (err) {
                reject(err);
            }
        });
    }
}