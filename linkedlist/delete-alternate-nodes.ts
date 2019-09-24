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

function deleteAltNodes(linklist: Linklist): LinklistNode {
    let pointer = linklist.head;
    while (pointer && pointer.next) {
        pointer.next = pointer.next.next;
        pointer = pointer.next;
    }
    return linklist.head;
}

const linklist = new Linklist();
linklist.add(1);
linklist.add(2);
linklist.add(3);
linklist.add(4);
linklist.add(5);
linklist.add(6);
linklist.add(7);
linklist.add(8);
linklist.show();
console.log('-------------------------------------------------')
const result = new Linklist();
result.head = deleteAltNodes(linklist);
result.show();