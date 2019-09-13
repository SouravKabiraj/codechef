class TreeNode {
    public element: number;
    public right: TreeNode;
    public left: TreeNode;

    constructor(element: number) {
        this.element = element;
        this.left = null;
        this.right = null;
    }

    public removeHands(): void {
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    public head: TreeNode;
    public size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(element: number) {
        const node = new TreeNode(element);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.right) {
                current = current.right;
            }
            current.right = node;
            node.left = current;
        }
        this.size++;
    }

    printList() {
        let index = 0;
        let curr = this.head;
        let str = "START";
        while (curr && index < this.size) {
            const arrow = curr.right.left == curr ? ' <-> ' : ' -> ';
            str += arrow + curr.element + " ";
            curr = curr.right;
            index++;
        }
        if (curr == this.head) {
            const right = curr.right;
            const arrow = right.left == curr ? ' <-> ' : ' -> ';
            str += arrow + 'START ....';
        }
        console.log(str);
    }
}


class Tree {
    static inOrderDoublyLinkedList(root: TreeNode, linkedList: LinkedList): LinkedList {
        if (root) {
            linkedList = Tree.inOrderDoublyLinkedList(root.left, linkedList);
            linkedList.addNode(root.element);
            linkedList = Tree.inOrderDoublyLinkedList(root.right, linkedList);
        }
        return linkedList;
    }
}

const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
const t4 = new TreeNode(4);
const t5 = new TreeNode(5);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t3.right = t5;

const linkedList = new LinkedList();
const doublyLinkedList = Tree.inOrderDoublyLinkedList(t1, linkedList);
let pointer = doublyLinkedList.head;
while (pointer.right) {
    pointer = pointer.right;
}
pointer.right = doublyLinkedList.head;
doublyLinkedList.head.left = pointer;

doublyLinkedList.printList();