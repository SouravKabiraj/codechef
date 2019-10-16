class TreeNode {
    constructor(element: string) {
        this.element = element;
    }

    public element: string;
    public left: TreeNode;
    public right: TreeNode;
}

function ternaryToBinaryTree(text: string): TreeNode {
    const root = new TreeNode(text[0]);
    if (text.length == 1) {
        return root;
    } else {
        const rightChildIndex = getRightChildIndex(text);
        const leftString = text.slice(2, rightChildIndex);
        const rightString = text.slice(rightChildIndex + 1);
        if (leftString.length >= 1) {
            root.left = ternaryToBinaryTree(leftString);
        }
        if (rightString.length >= 1) {
            root.right = ternaryToBinaryTree(rightString);
        }
        return root;
    }
}

function getRightChildIndex(text: string): number {
    let temp = 0;
    for (let index = 0; index < text.length; index++) {
        if (text[index] == '?') {
            temp++;
        }
        if (text[index] == ':') {
            temp--;
        }
        if (temp === 0 && text[index] == ':') {
            return index++;
        }
    }
}


console.log(JSON.stringify(ternaryToBinaryTree('1?2?3?4:5:7:9?1:3')));