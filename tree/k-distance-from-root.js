function KDistanceFromRoot(root, distance) {
    if (!root) {
        return [];
    }
    if (distance == 0) {
        return [root.data];
    } else {
        const result = [];
        result.push(...KDistanceFromRoot(root.left, distance - 1));
        result.push(...KDistanceFromRoot(root.right, distance - 1));
        return result;
    }
}

function main() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(9);
    root.left.left.right = new TreeNode(10);
    root.left.right = new TreeNode(4);
    root.left.right.left = new TreeNode(14);
    root.left.right.right = new TreeNode(15);
    root.right = new TreeNode(5);
    console.log(KDistanceFromRoot(root, 3));
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

main();
