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

function getMaxPath(tree: TreeNode, res: number): { maxSingle: number, res: number } {
    if (!tree) {
        return {maxSingle: 0, res: res};
    }
    const l = getMaxPath(tree.left, res).maxSingle;
    const r = getMaxPath(tree.right, res).maxSingle;

    const maxSingle = Math.max(Math.max(l, r) + tree.element, tree.element);

    const maxTop = Math.max(tree.element + l + r, maxSingle);
    res = Math.max(res, maxTop);

    return {maxSingle, res};
}

const treeNode = new TreeNode(10);
treeNode.left = new TreeNode(2);
treeNode.left.left = new TreeNode(20);
treeNode.left.right = new TreeNode(1);
treeNode.right = new TreeNode(10);
treeNode.right.right = new TreeNode(-25);
treeNode.right.right.left = new TreeNode(3);
treeNode.right.right.right = new TreeNode(4);

console.log(getMaxPath(treeNode, -9999999999999999).res);
