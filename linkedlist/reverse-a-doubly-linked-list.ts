class LinklistNode {
    public element: number;
    public next: LinklistNode;
    public prev: LinklistNode;

    constructor(element: number) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinklist {
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
            node.prev = pointer;
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

function reverse(doublyLinklist: DoublyLinklist): DoublyLinklist {
    let pointer = doublyLinklist.head;
    while (pointer) {
        doublyLinklist.head = pointer;
        let temp = pointer.next;
        pointer.next = pointer.prev;
        pointer.prev = temp;
        pointer = pointer.prev;
    }
    return doublyLinklist;
}

const doublyLinklist = new DoublyLinklist();
doublyLinklist.add(0);
doublyLinklist.add(4);
doublyLinklist.add(1);
doublyLinklist.add(2);
doublyLinklist.add(3);
doublyLinklist.add(5);
doublyLinklist.add(6);
const reverseLinklist = reverse(doublyLinklist);
reverseLinklist.show();
