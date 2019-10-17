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

function getHalfNodeTree(root: TreeNode): TreeNode {
    const rightChild = root.right ? getHalfNodeTree(root.right) : null;
    const leftChild = root.left ? getHalfNodeTree(root.left) : null;

    if (root.left == null && root.right == null) {
        return root;
    } else if (root.left == null) {
        return rightChild;
    } else if (root.right == null) {
        return leftChild;
    } else {
        root.left = leftChild;
        root.right = rightChild;
        return root;
    }
}

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
treeNode.right = new TreeNode(3);
treeNode.right.left = new TreeNode(6);


console.log(JSON.stringify(getHalfNodeTree(treeNode)));