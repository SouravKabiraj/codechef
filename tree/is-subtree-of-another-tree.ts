class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
    }
}

function isSubTree(subTree: TreeNode, subTreeHeight: number, tree: TreeNode, treeHeight: number): boolean {
    if (tree) {
        if (subTreeHeight === treeHeight) {
            return isEqualTree(subTree, tree);
        } else {
            const isLeftSubtree = isSubTree(subTree, subTreeHeight, tree.left, treeHeight - 1);
            const isRightSubtree = isSubTree(subTree, subTreeHeight, tree.right, treeHeight - 1);
            return isLeftSubtree || isRightSubtree;
        }
    } else {
        return !subTree;
    }
}

function isEqualTree(tree1: TreeNode, tree2: TreeNode): boolean {
    if (tree1.element == tree2.element) {
        let leftAns = false;
        let rightAns = false;
        if (tree1.left == null && tree2.left == null) {
            leftAns = true;
        } else if (tree1.left == null && tree2.left != null) {
            leftAns = false;
        } else if (tree1.left != null && tree2.left == null) {
            leftAns = false;
        } else {
            leftAns = isEqualTree(tree1.left, tree2.left);
        }
        if (tree1.right == null && tree2.right == null) {
            rightAns = true;
        } else if (tree1.right == null && tree2.right != null) {
            rightAns = false;
        } else if (tree1.right != null && tree2.right == null) {
            rightAns = false;
        } else {
            rightAns = isEqualTree(tree1.right, tree2.right);
        }
        return rightAns && leftAns;
    }
    return false;
}

function getTreeHeight(tree: TreeNode): number {
    if (!tree) {
        return 0;
    } else if (tree.right === null && tree.left === null) {
        return 0
    } else {
        const leftTreeHeight = getTreeHeight(tree.left);
        const rightTreeHeight = getTreeHeight(tree.right);
        return leftTreeHeight > rightTreeHeight ? leftTreeHeight + 1 : rightTreeHeight + 1;
    }
}

const sub = new TreeNode(1);
sub.left = new TreeNode(100);
const tree = new TreeNode(10);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(1);
tree.right.left.left = new TreeNode(5);
console.log(isSubTree(null, getTreeHeight(null), tree, getTreeHeight(tree)));