enum Type {
    L = 'L', N = 'N'
}

class TreeNode {
    constructor(element: number, type: Type) {
        this.element = element;
        this.type = type;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
    public type: Type;
}

let T1 = new TreeNode(1, Type.N);
let T2 = new TreeNode(2, Type.N);
let T3 = new TreeNode(3, Type.L);
let T4 = new TreeNode(4, Type.L);
T1.left = T2;
T1.right = T3;
T2.left = T4;


function getPostOrder(root: TreeNode): void {
    if (root) {
        if (root.type == Type.N) {
            getPostOrder(root.left);
            getPostOrder(root.right);
        }
        console.log(root.element);
    }
}

getPostOrder(T1);