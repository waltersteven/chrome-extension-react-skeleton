async function apiCall (param) {
    if (param == null) {
        throw new Error('param is null');
    }

    return ['a', 'b', 'c'];
}
