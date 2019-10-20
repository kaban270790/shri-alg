const getPrimeNumber = function (number) {
    let result = [];
    for (let i = 2; i < number; i++) {
        if (i > 10 && ((i % 2) === 0 || (i % 10) === 5 || (i % 3) === 0 || (i % 5) === 0 || (i % 7) === 0)) {
            continue;
        }
        let isDel = false;
        let l = i;
        if (i > 10) {
            l = Math.ceil(Math.sqrt(i));
        }
        for (let j = 2; j < l; j++) {
            if ((i % j) === 0) {
                isDel = true;
                break;
            }
        }
        if (isDel === false) {
            result.push(i);
        }
    }
    return result;
};

// 57 = 2/3/5/7
console.log([2, 3, 5, 7,], getPrimeNumber(10));
/**
 [
 2,  3,  5,  7, 11, 13, 17, 19,
 23, 29, 31, 37, 41, 43, 47, 53,
 59, 61, 67, 71, 73, 79, 83, 89,
 97
 ]
 */
let time = Date.now();
console.log(getPrimeNumber(100));
