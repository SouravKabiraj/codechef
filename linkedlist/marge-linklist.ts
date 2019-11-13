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

    addNode(node: LinklistNode): void {
        let p = this.head;
        while (p.next) {
            p = p.next;
        }
        p.next = node;
    }

    marge(linklist: Linklist): Linklist {
        let pointer1 = this.head;
        let pointer2 = linklist.head;
        while (pointer1 && pointer2) {
            const linklistNode = new LinklistNode(pointer2.element);
            linklistNode.next = pointer1.next;
            pointer1.next = linklistNode;
            this.size++;
            pointer1 = pointer1.next.next;
            pointer2 = pointer2.next;
        }
        if (pointer2) {
            this.addNode(pointer2);
        }
        return this;
    }

    show(): void {
        let pointer = this.head;
        while (pointer !== null) {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}


const linklist1 = new Linklist();
const linklist2 = new Linklist();
linklist1.add(1);
linklist1.add(2);
linklist1.add(3);
linklist1.add(3);
linklist1.add(3);
linklist1.add(3);
linklist1.add(3);
linklist1.add(3);
linklist1.add(3);

linklist2.add(2);
linklist2.add(2);

linklist1.marge(linklist2).show();
