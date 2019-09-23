class LinklistNode {
    public element: number;
    public next: LinklistNode;

    constructor(element: number) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinklist {
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
            this.head.next = this.head;
        } else {
            do {
                pointer = pointer.next;
            } while (pointer.next != this.head);
            pointer.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
    }

    getMidPointer(): LinklistNode {
        let pointer = this.head;
        let mid = this.head;
        let midButOne = mid;
        this.tail.next = null;
        while (pointer.next.next !== null) {
            pointer = pointer.next.next;
            midButOne = mid;
            mid = mid.next;
        }
        this.tail.next = this.head;
        return midButOne;
    }

    show(): void {
        let pointer = this.head;
        do {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        } while (pointer !== this.head);
    }
}

const linklist1 = new CircularLinklist();
linklist1.add(1);
linklist1.add(2);
linklist1.add(3);
linklist1.add(4);
linklist1.add(5);
linklist1.add(6);
linklist1.add(7);

const midPointer = linklist1.getMidPointer();

const mid = midPointer.next;

linklist1.tail.next = mid;

midPointer.next = linklist1.head;
linklist1.tail = midPointer;

linklist1.show();
console.log('---------------------------------');

const linklist2 = new CircularLinklist();
linklist2.head = mid;
linklist2.show()