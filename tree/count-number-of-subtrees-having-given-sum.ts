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

let count = 0

function getTreeSum(tree: TreeNode, matchNumber: number): number {
    const leftSum = tree.left ? getTreeSum(tree.left, matchNumber) : 0;
    const rightSum = tree.right ? getTreeSum(tree.right, matchNumber) : 0;
    const number = tree.element + leftSum + rightSum;
    if (number == matchNumber) {
        count++;
    }
    return number;
}


const treeNode = new TreeNode(10);
treeNode.left = new TreeNode(1);
treeNode.left.left = new TreeNode(2);
treeNode.left.left.left = new TreeNode(2);
treeNode.left.left.right = new TreeNode(2);
treeNode.left.right = new TreeNode(3);
treeNode.right = new TreeNode(8);
treeNode.right.left = new TreeNode(1);
treeNode.right.right = new TreeNode(1);
getTreeSum(treeNode, 10);
console.log(count);
