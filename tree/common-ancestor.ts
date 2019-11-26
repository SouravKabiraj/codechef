class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
    }
}

function getCommonAncestor(tree: TreeNode, target1: number, target2: number): { target1: boolean, target2: boolean } {
    const returnValue = {target1: false, target2: false};
    if (tree) {
        if (tree.element === target1) {
            returnValue.target1 = true;
        } else if (tree.element === target2) {
            returnValue.target2 = true;
        }
        const commonAncestorLeft = getCommonAncestor(tree.left, target1, target2);
        const commonAncestorRight = getCommonAncestor(tree.right, target1, target2);
        returnValue.target1 || (returnValue.target1 = commonAncestorLeft.target1 || commonAncestorRight.target1);
        returnValue.target2 || (returnValue.target2 = commonAncestorLeft.target2 || commonAncestorRight.target2);
        (returnValue.target1 && returnValue.target2) ? Queue.push(tree.element) : null;
        return returnValue;
    }
    return returnValue;
}

const Queue = [];

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(4);
treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(6);
getCommonAncestor(treeNode, 4, 5);
console.log(Queue[0]);