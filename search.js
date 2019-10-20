const binarySearch = function (num, array) {
    if (array.length === 0) {
        return -1;
    }
    if (array.length === 1) {
        return array[0] === num ? 0 : -1;
    }
    const find = function (start, end) {
        if ((end - start) === 1) {
            return array[start] === num ? start : -1;
        }
        const center = (start + Math.ceil((end - start) / 2));
        if (num > array[center]) {
            return find(center, end);
        } else if (num < array[center]) {
            return find(start, center);
        } else {
            return array[center] === num ? center : -1;
        }
    };
    return find(0, array.length);
};


console.log(0, binarySearch(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(1, binarySearch(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(2, binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(3, binarySearch(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(4, binarySearch(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(5, binarySearch(6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(6, binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(7, binarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(8, binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(9, binarySearch(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
