const getValues = function (node) {
    let result = [];
    result.push(node.val);
    if (!node.ch) {
        return result;
    }
    node.ch.forEach(childNode => {
        result = result.concat(getValues(childNode));
    });
    return result;
};


const getValuesInWidth = function (node) {
    const result = [];
    const begin = function (node) {
        if (node.ch) {
            node.ch.forEach(nodeChild => {
                result.push(nodeChild.val);
            });
            node.ch.forEach(begin);
        }
    };
    result.push(node.val);
    begin(node);
    return result;
};

console.log(getValuesInWidth({
    val: 1,
    ch: [
        {
            val: 2,
            ch: [
                {
                    val: 4,
                },
                {
                    val: 5,
                }
            ],
        },
        {
            val: 3,
            ch: [
                {
                    val: 6,
                },
                {
                    val: 7,
                },
                {
                    val: 8,
                }
            ],
        }
    ],
}));
