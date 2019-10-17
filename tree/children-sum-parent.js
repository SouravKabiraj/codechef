var TreeNode = /** @class */ (function () {
    function TreeNode(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
    return TreeNode;
}());
function isChildrenSumParents(root) {
    if (!root) {
        return true;
    }
    if (isChildrenSumParents(root.left) && isChildrenSumParents(root.right)) {
        var left = root.left ? root.left.element : 0;
        var right = root.right ? root.right.element : 0;
        return (!root.left && !root.right) || (root.element === (left + right));
    }
    else {
        return false;
    }
}
var tree = new TreeNode(5);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(1);
tree.right.left = new TreeNode(2);
tree.left = new TreeNode(3);
console.log(isChildrenSumParents(tree));
