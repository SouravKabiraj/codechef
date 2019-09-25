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

function margeRev(linkedList1: Linklist, linkedList2: Linklist): Linklist {
    let pointer1 = linkedList1.head;
    let pointer2 = linkedList2.head;
    const resultList = new Linklist();

    while (pointer1 != null && pointer2 != null) {
        if (pointer1.element < pointer2.element) {
            resultList.addAtStart(pointer1.element);
            pointer1 = pointer1.next;
        } else {
            resultList.addAtStart(pointer2.element);
            pointer2 = pointer2.next;
        }
    }
    if (pointer1 != null) {
        while (pointer1 != null) {
            resultList.addAtStart(pointer1.element);
            pointer1 = pointer1.next;
        }
    }
    if (pointer2 != null) {
        while (pointer2 != null) {
            resultList.addAtStart(pointer2.element);
            pointer2 = pointer2.next;
        }
    }
    return resultList;
}


const link1 = new Linklist();
link1.add(1);
link1.add(3);
link1.add(4);
link1.add(5);
link1.add(7);
link1.add(9);

const link2 = new Linklist();
link2.add(2);
link2.add(6);
link2.add(8);
link2.add(10);

margeRev(link1, link2).show();