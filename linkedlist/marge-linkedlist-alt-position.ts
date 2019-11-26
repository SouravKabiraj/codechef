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

    show(): void {
        let pointer = this.head;
        while (pointer !== null) {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}

function marge(linklist1: Linklist, linklist2: Linklist): Linklist {
    let pointer1 = linklist1.head;
    let pointer2 = linklist2.head;

    while (pointer1 && pointer2) {
        let temp = pointer2;
        pointer2 = pointer2.next;
        temp.next = pointer1.next;
        pointer1.next = temp;

        pointer1 = pointer1.next.next;
    }
    return;
}

function main() {
    const linklist1 = new Linklist();
    const linklist2 = new Linklist();
    const linklist3 = marge(linklist1, linklist2);
    linklist3.show();
}