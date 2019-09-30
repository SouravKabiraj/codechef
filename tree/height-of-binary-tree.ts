class TreeNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

function calculateHeight(root: TreeNode): number {
    if (root == null || !(root.left || root.right)) {
        return 0;
    }
    if (root.left || root.right) {
        let heightRight = calculateHeight(root.right);
        let heightLeft = calculateHeight(root.left);
        return 1 + (heightRight > heightLeft ? heightRight : heightLeft);
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


const height = calculateHeight(randomRoot);
console.log(JSON.stringify(height));