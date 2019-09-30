class TreeNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

function getMirror(tree: TreeNode): TreeNode {
    if (tree.right == null && tree.left == null) {
        return;
    } else {
        const temp = tree.left;
        tree.left = tree.right ? getMirror(tree.right) : null;
        tree.right = temp ? getMirror(temp) : null;
        return tree;
    }
}

const randomRoot = new TreeNode(1);
randomRoot.left = new TreeNode(2);
randomRoot.right = new TreeNode(3);
randomRoot.left.left = new TreeNode(4);
randomRoot.left.right = new TreeNode(5);
randomRoot.left.left.left = new TreeNode(0);
randomRoot.left.left.left.right = new TreeNode(10);
randomRoot.right.left = new TreeNode(3);
randomRoot.right.left.right = new TreeNode(3);
randomRoot.right.left.right.left = new TreeNode(3);
randomRoot.right.left.right.left.left = new TreeNode(3);
randomRoot.right.left.right.left.left.right = new TreeNode(3);

console.log(JSON.stringify(randomRoot));
const height = getMirror(randomRoot);
console.log(JSON.stringify(height));