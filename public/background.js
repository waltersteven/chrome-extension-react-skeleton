
'use strict';

chrome.runtime.onInstalled.addListener(function () {
    console.log('Hello from Background script!');

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostEquals: 'fast-headland-16825.herokuapp.com' },
            })   
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});