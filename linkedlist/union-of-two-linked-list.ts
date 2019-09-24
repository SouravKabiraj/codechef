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

    isElementExists(element: number): boolean {
        let pointer = this.head;
        while (pointer != null) {
            if (pointer.element == element) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    show(): void {
        let pointer = this.head;
        while (pointer !== null) {
            console.log(`-> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}

function union(l1: Linklist, l2: Linklist): Linklist {
    const linklist = new Linklist();
    let pointer = l1.head;
    while (pointer != null) {
        if (!linklist.isElementExists(pointer.element)) {
            linklist.add(pointer.element);
        }
        pointer = pointer.next;
    }

    pointer = l2.head;
    while (pointer != null) {
        if (!linklist.isElementExists(pointer.element)) {
            linklist.add(pointer.element);
        }
        pointer = pointer.next;
    }
    return linklist;
}

let linklist1 = new Linklist();
linklist1.add(1);
linklist1.add(1);
linklist1.add(2);
linklist1.add(3);
linklist1.add(4);

let linklist2 = new Linklist();
linklist2.add(0);
linklist2.add(1);
linklist2.add(9);
linklist2.add(7);
linklist2.add(4);

let linklist = union(linklist1, linklist2);

linklist.show();

