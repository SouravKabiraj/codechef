class LinkListNode {
    public element: number;
    public next: LinkListNode;

    constructor(element: number) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    public head: LinkListNode = null;
    public tail: LinkListNode = null;
    public size = 0;

    public add(element: number): void {
        const node = new LinkListNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    public getNodeByIndex(index: number): LinkListNode {
        if (index < 0 || index >= this.size) {
            return null;
        } else {
            let pointer = this.head;
            for (let i = 1; i <= index; i++) {
                pointer = pointer.next;
            }
            return pointer;
        }
    }
}

class Tree {
    public element: number;
    public left: Tree;
    public right: Tree;

    constructor(element: number) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

function addTreeOfIndex(linkedList: LinkList, index: number): Tree {
    const nodeByIndex = linkedList.getNodeByIndex(index);
    if (nodeByIndex) {
        const tree = new Tree(nodeByIndex.element);
        tree.left = addTreeOfIndex(linkedList, 2 * index + 1);
        tree.right = addTreeOfIndex(linkedList, 2 * index + 2);
        return tree;
    } else {
        return null;
    }
}

const linkedList = new LinkList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

const tree = addTreeOfIndex(linkedList, 0);
console.log(JSON.stringify(tree));