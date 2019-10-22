const expandList = function (node) {
    let prevNode, nextNode = node.next, currNode = node;
    while (nextNode) {
        if (prevNode) {
            currNode.next = prevNode;
        } else {
            delete currNode.next;
        }
        prevNode = currNode;
        currNode = nextNode;
        nextNode = currNode.next;
    }
    currNode.next = prevNode;
    return currNode;
};

console.log('---', expandList({
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
