class TreeNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;

}

class RandomNode {
    constructor(element: number) {
        this.element = element;
    }

    public element: number;
    public left: RandomNode;
    public right: RandomNode;
    public random: RandomNode;
}

function elementRandom(root: RandomNode): TreeNode {
    if (root.left == null && root.right == null) {
        return new TreeNode(root.element);
    } else {
        const treeNode = new TreeNode(root.element);
        treeNode.left = root.left ? elementRandom(root.left) : null;
        treeNode.right = root.right ? elementRandom(root.right) : null;
        return treeNode;
    }
}


const randomRoot = new RandomNode(1);
randomRoot.left = new RandomNode(2);
randomRoot.right = new RandomNode(3);
randomRoot.left.left = new RandomNode(4);
randomRoot.left.right = new RandomNode(5);
randomRoot.left.random = new RandomNode(0);

const tree = elementRandom(randomRoot);
console.log(JSON.stringify(tree));