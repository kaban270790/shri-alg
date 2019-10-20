const checkBrackets = function (str) {
    let brackets = [];
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    const arrayStr = str.split('');
    for (let i = 0, l = arrayStr.length; i < l; i++) {
        let symbol = arrayStr[i];
        let bracketOpenIndex = open.indexOf(symbol);
        if (bracketOpenIndex >= 0) {
            brackets.push(bracketOpenIndex);
        } else {
            let bracketCloseIndex = close.indexOf(symbol);
            if (bracketCloseIndex >= 0) {
                let lastBrackets = brackets.pop();
                if (lastBrackets === undefined || lastBrackets !== bracketCloseIndex) {
                    return false;
                }
            }
        }
    }
    return brackets.length === 0;
};

console.log('(asdasd)', checkBrackets('(asdasd)'));
console.log('([])', checkBrackets('([])'));
console.log('([]])', checkBrackets('([]])'));
console.log('([)', checkBrackets('([)'));
