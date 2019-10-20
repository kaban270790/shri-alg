const expandList = function (node) {
    let nodes = [];
    const pushNode = function (node) {
        nodes.push(node);
        if (node.next) {
            pushNode(node.next);
        }
    };
    pushNode(node);
    let newNode;
    for (let i = 0, l = nodes.length; i < l; i++) {
        nodes[i].next = newNode ? newNode : undefined;
        newNode = nodes[i];
    }
    return newNode;
};

console.log(expandList({
    val: 5,
    next: {
        val: 8,
        next: {
            val: 10,
            next: {
                val: 3
            }
        }
    }
}));
