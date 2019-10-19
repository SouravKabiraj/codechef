class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
}

function getNodeCount(tree: TreeNode, min: number, max: number) {
    if (tree) {
        if (tree.element > min && tree.element < max) {
            return 1 + getNodeCount(tree.right, min, max) + getNodeCount(tree.left, min, max);
        } else {
            if (tree.element <= min) {
                return getNodeCount(tree.right, min, max);
            } else {
                return getNodeCount(tree.left, min, max);
            }
        }
    } else {
        return 0;
    }
}

const treeNode = new TreeNode(10);
treeNode.left = new TreeNode(5);
treeNode.left.left = new TreeNode(2);
treeNode.left.right = new TreeNode(7);
treeNode.right = new TreeNode(15);
treeNode.right.left = new TreeNode(13);
treeNode.right.right = new TreeNode(18);

console.log(getNodeCount(treeNode, 5, 16));
