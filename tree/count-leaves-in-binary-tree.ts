class TreeNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

function getAllChildren(root: TreeNode): void {
    if (root.right == null && root.left == null) {
        console.log(`-> ${root.element}`);
    } else {
        if (root.left) {
            getAllChildren(root.left);
        }
        if (root.right) {
            getAllChildren(root.right);
        }
    }
}


const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(3);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
treeNode.left.left.left = new TreeNode(6);
treeNode.left.left.left.right = new TreeNode(7);
treeNode.right.left = new TreeNode(8);
treeNode.right.left.right = new TreeNode(9);
treeNode.right.left.right.left = new TreeNode(10);
treeNode.right.left.right.left.left = new TreeNode(11);
treeNode.right.left.right.left.left.right = new TreeNode(12);

getAllChildren(treeNode);