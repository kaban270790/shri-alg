const insertSort = function (array) {
    let length = array.length;
    for (let i = (length - 1); i--;) {
        let curVal = array[i];
        for (let j = i; j < length; j++) {
            let nextJ = j + 1;
            if (!array[nextJ] || array[nextJ] > curVal) {
                array[j] = curVal;
                break;
            } else {
                array[j] = array[nextJ];
            }
        }
    }
    return array;
};
