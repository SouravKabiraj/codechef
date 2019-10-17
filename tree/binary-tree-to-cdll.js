var TreeNode = /** @class */ (function () {
    function TreeNode(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
    return TreeNode;
}());
var DoubleLinkList = /** @class */ (function () {
    function DoubleLinkList() {
        this.head = null;
        this.tail = null;
    }
    DoubleLinkList.prototype.add = function (node) {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.right = node;
            node.left = this.tail;
            this.tail = node;
        }
    };
    DoubleLinkList.prototype.addCDLL = function (dll) {
        this.tail.right = dll.head;
        dll.head.left = this.tail;
        this.tail = dll.tail;
    };
    return DoubleLinkList;
}());
function getCll(root) {
    if (!root) {
        return new DoubleLinkList();
    }
    if (root.left == null && root.right == null) {
        var doubleLinkList_1 = new DoubleLinkList();
        doubleLinkList_1.add(root);
        return doubleLinkList_1;
    }
    else {
        var linkList = getCll(root.left);
        var linkedList2 = getCll(root.right);
        linkList.add(root);
        linkList.addCDLL(linkedList2);
        return linkList;
    }
}
var treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(3);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
var doubleLinkList = getCll(treeNode);
doubleLinkList.
