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


console.log(getValues({
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
