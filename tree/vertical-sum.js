var TreeNode = /** @class */ (function () {
    function TreeNode(element) {
        this.element = element;
    }
    return TreeNode;
}());
var root = new TreeNode(2);
root.right = new TreeNode(1);
root.left = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
var verticalSum = {};
function getConstDigonalSum(root, distance) {
    var pointer = root;
    if (root.left) {
        verticalSum[distance - 1] = (verticalSum[distance - 1] ? verticalSum[distance - 1] : 0) + root.left.element;
        getConstDigonalSum(root.left, distance - 1);
    }
    if (root.right) {
        verticalSum[distance + 1] = (verticalSum[distance + 1] ? verticalSum[distance + 1] : 0) + root.right.element;
        getConstDigonalSum(root.right, distance + 1);
    }
}
verticalSum[0] = root.element;
getConstDigonalSum(root, 0);
console.log(verticalSum);
