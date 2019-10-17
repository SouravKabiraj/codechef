class TreeNode {
    constructor(element: number) {
        this.element = element;
        this.right = null;
        this.left = null;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

function isChildrenSumParents(root: TreeNode): boolean {
    if (!root) {
        return true;
    }
    if (isChildrenSumParents(root.left) && isChildrenSumParents(root.right)) {
        const left = root.left ? root.left.element : 0;
        const right = root.right ? root.right.element : 0;
        return (!root.left && !root.right) || (root.element === (left + right));
    } else {
        return false;
    }
}

const tree = new TreeNode(5);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(1);
tree.right.left = new TreeNode(2);
tree.left = new TreeNode(2);

console.log(isChildrenSumParents(tree));
