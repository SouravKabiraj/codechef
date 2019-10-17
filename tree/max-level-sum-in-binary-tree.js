var TreeNode = /** @class */ (function () {
    function TreeNode(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
    return TreeNode;
}());
var result = {};
function addValueForTreeNode(node, index) {
    if (node) {
        result[index] = (result[index] ? result[index] : 0) + node.element;
        addValueForTreeNode(node.right, index + 1);
        addValueForTreeNode(node.left, index + 1);
    }
}
var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(2);
tree.right = new TreeNode(3);
addValueForTreeNode(tree, 0);
console.log(result);
