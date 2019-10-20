let selectSort = function (array) {
    let length = array.length;
    for (let i = 0, l = length; i < l; i++) {
        let max, maxIndex;
        for (let j = 0; j < length; j++) {
            if (!max || array[j] > max) {
                max = array[j];
                maxIndex = j;
            }
        }
        length--;
        if (maxIndex !== i) {
            let lastVal = array[length];
            array[length] = max;
            array[maxIndex] = lastVal;
        }
    }
    return array;
};
console.log(selectSort([1, 4, 6, 8, 0, 2]));
