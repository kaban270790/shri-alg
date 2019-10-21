const expandList = function (node) {
    const swap = function (node) {
        if (!node.next) {
            return node;
        }
        let child = swap(node.next);
        node.next.next = node;
        delete node.next;
        return child;
    };
    return swap(node);
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
