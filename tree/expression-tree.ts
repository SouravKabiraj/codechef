class TreeNode {
    public element: string;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: string) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
}

function getAnswer(root: TreeNode): number {
    if (root.right == null && root.left == null) {
        return parseInt(root.element);
    } else {
        return calculate(getAnswer(root.left), getAnswer(root.right), root.element);
    }
}

function calculate(element1: number, element2: number, exp: string): number {
    switch (exp) {
        case '+':
            return element1 + element2;
            break;
        case '-':
            return element1 - element2;
            break;
        case '*':
            return element1 * element2;
            break;
        case '/':
            return element1 / element2;
    }
}

const root = new TreeNode('+');
root.left = new TreeNode('-');
root.left.left = new TreeNode('100');
root.left.right = new TreeNode('50');
root.right = new TreeNode('1');

console.log(JSON.stringify(getAnswer(root)));