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

class DoubleLinkList {
    public head: TreeNode = null;
    public tail: TreeNode = null;

    public add(node: TreeNode): void {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.right = node;
            node.left = this.tail;
            this.tail = node;
        }
    }

    public addCDLL(dll: DoubleLinkList): void {
        this.tail.right = dll.head;
        dll.head.left = this.tail;
        this.tail = dll.tail;
    }
}


function getCll(root: TreeNode): DoubleLinkList {
    if (!root) {
        return new DoubleLinkList();
    }
    if (root.left == null && root.right == null) {
        const doubleLinkList = new DoubleLinkList();
        doubleLinkList.add(root);
        return doubleLinkList;
    } else {
        const linkList = getCll(root.left);
        const linkedList2 = getCll(root.right);

        linkList.add(root);
        linkList.addCDLL(linkedList2);
        return linkList;
    }
}

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(3);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);

const doubleLinkList = getCll(treeNode);
doubleLinkList.tail.right = doubleLinkList.head;
doubleLinkList.head.left = doubleLinkList.tail;
console.log(JSON.stringify(doubleLinkList))
