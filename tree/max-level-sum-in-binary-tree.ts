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

const ans = {};

function MaxLevelSumInBinaryTree(tree: TreeNode, index: number): void {
    if (tree) {
        ans[index] = ans[index] ? ans[index] + tree.element : tree.element;
        MaxLevelSumInBinaryTree(tree.left, index + 1);
        MaxLevelSumInBinaryTree(tree.right, index + 1);
    }
}

const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.left = new TreeNode(2);
tree.right.right = new TreeNode(100);
tree.right.left = new TreeNode(2);

MaxLevelSumInBinaryTree(tree, 0);
console.log(ans);
