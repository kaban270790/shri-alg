
let bubbleSort = function (array) {
    let length = array.length;
    while (true) {
        let hasChange = false;
        for (let i = 0, l = length; i < l; i++) {
            let nextI = i + 1;
            if (array[nextI] && array[i] > array[nextI]) {
                hasChange = true;
                let curVal = array[i];
                array[i] = array[nextI];
                array[nextI] = curVal;
            }
        }
        length--;
        if (length <= 0 || hasChange === false) {
            break;
        }
    }
    return array;
};
console.log('bubbleSort');
