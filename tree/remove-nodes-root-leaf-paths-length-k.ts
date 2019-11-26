class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
    }
}

function removeNodesRootLeafPathLengthK(tree: TreeNode, level: number, k: number): TreeNode {
    if (!tree) {
        return null;
    }
    tree.left = removeNodesRootLeafPathLengthK(tree.left, level + 1, k);
    tree.right = removeNodesRootLeafPathLengthK(tree.right, level + 1, k);

    if (tree.right == null && tree.left == null && level < k) {
        return null;
    }
    return tree;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(4);
tree.left.left.left = new TreeNode(6);
tree.left.left.left.left = new TreeNode(7);
tree.left.right = new TreeNode(5);
tree.right = new TreeNode(3);
console.log(JSON.stringify(removeNodesRootLeafPathLengthK(tree, 1, 4)));