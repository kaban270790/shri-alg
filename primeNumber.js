const getPrimeNumber = function (number) {
    let result = [];
    for (let i = 2; i < number; i++) {
        //проверять только те числа, которые заканчиваются на 1, 3, 7 или 9 (так как остальные очевидно делятся на 2 или 5)
        if (i > 10 && ((i % 2) === 0 || (i % 10) === 5)) {
            continue;
        }
        let isDel = false;
        for (let j = 2; j < i; j++) {
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


console.log([2, 3, 5, 7,], getPrimeNumber(10));
