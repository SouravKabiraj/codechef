class LinklistNode {
    public element: number;
    public next: LinklistNode;

    constructor(element: number) {
        this.element = element;
        this.next = null;
    }
}

class LinklistNodeArb {
    public element: number;
    public next: LinklistNodeArb;
    public arbs: LinklistNodeArb[];

    constructor(element: number) {
        this.element = element;
        this.next = null;
        this.arbs = [];
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

    show(): void {
        let pointer = this.head;
        while (pointer !== null) {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}

function cloneLinkedList(linklistNodeArbRoot: LinklistNodeArb) {
    let pointer = linklistNodeArbRoot;
    const returnLinkList = new Linklist();
    while (pointer) {
        returnLinkList.add(pointer.element);
        pointer = pointer.next;
    }
    return returnLinkList;
}


const root = new LinklistNodeArb(1);
root.next = new LinklistNodeArb(2);
root.next.next = new LinklistNodeArb(3);
root.next.next.next = new LinklistNodeArb(4);
root.next.next.next.next = new LinklistNodeArb(5);
root.next.next.next.next.next = new LinklistNodeArb(6);

root.arbs[0] = root.next.next;
root.next.next.arbs[0] = root.next.next.next.next;

cloneLinkedList(root).show();
