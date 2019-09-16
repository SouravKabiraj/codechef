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
            this.tail = node;

        } else {
            while (pointer.next != null) {
                pointer = pointer.next;
            }
            this.tail = node;
            pointer.next = node;
        }
    }

    getPerv(node: LinklistNode): LinklistNode {
        if (node == this.head) {
            return null;
        } else {
            let prev = this.head;
            let pointer = this.head.next;
            while (pointer != node) {
                pointer = pointer.next;
                prev = prev.next;
            }
            return prev;
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

function addOne(linkedlist: Linklist): Linklist {
    if (linkedlist.head == linkedlist.tail && linkedlist.tail.element == 9) {
        let newHead = new LinklistNode(1);
        linkedlist.head.element = linkedlist.head.element == 9 ? 0 : linkedlist.head.element + 1;
        newHead.next = linkedlist.head;
        linkedlist.head = newHead;
        return linkedlist;
    }
    if (linkedlist.tail.element != 9) {
        linkedlist.tail.element = linkedlist.tail.element + 1;
        return linkedlist;
    } else {
        linkedlist.tail.element = 0;
        const frontLinkedlist = new Linklist();
        frontLinkedlist.head = linkedlist.head;
        frontLinkedlist.tail = linkedlist.getPerv(linkedlist.tail);
        frontLinkedlist.size = linkedlist.size - 1;
        return addOne(frontLinkedlist);
    }
}

let linklist = new Linklist();
linklist.add(9);
linklist.add(0);
linklist.add(9);

addOne(linklist).show();
