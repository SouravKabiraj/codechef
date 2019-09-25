class LinklistNode {
    public element: number;
    public next: LinklistNode;

    constructor(element: number) {
        this.element = element;
        this.next = null;
    }
}

class Linklist {
    public head: LinklistNode;
    public tail: LinklistNode;
    public size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(element: number): void {
        const node = new LinklistNode(element);
        let pointer = this.head;
        if (pointer == null) {
            this.head = node;
        } else {
            while (pointer.next != null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
    }

    getMid(): LinklistNode {
        let pointer = this.head;
        let mid = this.head;
        while (pointer.next.next !== null) {
            pointer = pointer.next.next;
            mid = mid.next;
        }
        return mid;
    }

    getTailPointer(): LinklistNode {
        let pointer = this.head;
        while (pointer.next.next) {
            pointer = pointer.next;
        }
        return pointer;
    }

    addAtStart(element: number): void {
        const node = new LinklistNode(element);
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    show(): void {
        let pointer = this.head;
        while (pointer !== null) {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}

function Reorder(linkedList: Linklist): Linklist {
    let pointer = linkedList.head;
    while (pointer != null) {
        const tailPointer = linkedList.getTailPointer();
        const tail = tailPointer.next;
        tailPointer.next = null;
        tail.next = pointer.next;
        pointer.next = tail;
        pointer = pointer.next.next;
    }
    return linkedList;
}


const linkedList = new Linklist();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(8);

Reorder(linkedList).show();