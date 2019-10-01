class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
    }
}

class BSTree {
    public static add(element: number, root: TreeNode): void {
        if (element < root.element) {
            if (!root.left) {
                root.left = new TreeNode(element);
            } else {
                BSTree.add(element, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(element);
            } else {
                BSTree.add(element, root.right);
            }
        }
    }

    public static getMin(root: TreeNode): TreeNode {
        if (!root.left) {
            return root;
        } else {
            return BSTree.getMin(root.left);
        }
    }
}

const root = new TreeNode(10);
BSTree.add(9, root);
BSTree.add(11, root);
BSTree.add(8, root);
BSTree.add(-1, root);
BSTree.add(1, root);
BSTree.add(0, root);
BSTree.add(5, root);
BSTree.add(2, root);

console.log(BSTree.getMin(root).element);