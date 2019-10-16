class TreeNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

const root = new TreeNode(2);
root.right = new TreeNode(1);
root.left = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const digonalSum = {};

function getConstDigonalSum(root: TreeNode, distance: number) {
    let pointer = root;
    if (root.left) {
        digonalSum[distance + 1] = (digonalSum[distance + 1] ? digonalSum[distance + 1] : 0) + root.left.element;
        getConstDigonalSum(root.left, distance + 1);
    }
    if (root.right) {
        digonalSum[distance] = (digonalSum[distance] ? digonalSum[distance] : 0) + root.right.element;
        getConstDigonalSum(root.right, distance);
    }
}

digonalSum[0] = root.element;
getConstDigonalSum(root, 0)
console.log(digonalSum);
