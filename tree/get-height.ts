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

function getHeight(tree: TreeNode): number {
    if (!tree) {
        return 0;
    } else if (tree.left === null && tree.right === null) {
        return 0;
    } else {
        const rightTreeHeight = getHeight(tree.right);
        const leftTreeHeight = getHeight(tree.left);
        return rightTreeHeight > leftTreeHeight ? rightTreeHeight + 1 : leftTreeHeight + 1;
    }
}

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(2);
treeNode.right.right = new TreeNode(2);
treeNode.right.right.right = new TreeNode(2);
treeNode.right.right.right.right = new TreeNode(2);
console.log(getHeight(treeNode));
