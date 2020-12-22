function myForEach(arrSource, funcCallBack) {
    if (arrSource === undefined || !Array.isArray(arrSource)) {
        return
    }
    if (funcCallBack === undefined || typeof funcCallBack != "function") {
        return
    }
    for (let index = 0; index < arrSource.length; index++) {
        funcCallBack(arrSource[index], index, arrSource);
    }
}