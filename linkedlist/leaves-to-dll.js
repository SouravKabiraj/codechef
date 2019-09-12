class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

function LeavesToDLL(root, dll) {
    if (!root) {
        return null;
    } else if (root.left == null && root.right == null) {
        if (dll) {
            let tail = dll.getTail();
            tail.right = root;
            root.left = tail;
        } else {
            dll = root;
        }
        return dll;
    } else if (root.left == null) {
        return LeavesToDLL(root.right, dll);
    } else if (root.right == null) {
        return LeavesToDLL(root.left, dll);
    }
}