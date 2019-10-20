const getValues = function (node) {
    let result = [];
    result.push(node.val);
    if (!node.ch) {
        return result;
    }
    node.ch.forEach(childNode => {
        let childResult = getValues(childNode);
        result = result.concat(childResult);
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
