function createDebounceFunction(funcInit, time) {
    let timer = time;
    let idTimer = false;
    return function() {
        if (idTimer === false) {
            idTimer = setTimeout(funcInit, timer);
        } else {
            clearTimeout(idTimer);
            idTimer = setTimeout(funcInit, timer);
        }
    }
}