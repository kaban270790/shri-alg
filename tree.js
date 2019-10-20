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
    let nodes = [];
    nodes.push(node);
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.ch) {
            nodes = nodes.concat(node.ch)
        }
        result.push(node.val);
    }
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
                    ch: [{val: 9}, {val: 10}, {val: 11}]
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
