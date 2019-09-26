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

    getOddAndEvenList(): { odd: Linklist, even: Linklist } {
        let pointer = this.head;
        const evenList = new Linklist();
        const oddList = new Linklist();

        while (pointer) {
            if (pointer.element % 2) {
                evenList.addSortedly(pointer.element);
            } else {
                oddList.addSortedly(pointer.element);
            }
            pointer = pointer.next;
        }
        return {odd: oddList, even: evenList};
    }

    addSortedly(element: number): void {
        let pointer = this.head;
        let prev_pointer = this.head;
        const linklistNode = new LinklistNode(element);

        if (this.head) {
            while (pointer && pointer.element < linklistNode.element) {
                prev_pointer = pointer;
                pointer = pointer.next;
            }

            prev_pointer.next = linklistNode;
            linklistNode.next = pointer;
        } else {
            this.head = linklistNode;
        }

    }
}


const linkedList = new Linklist();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.getOddAndEvenList().even.show();
console.log('----------------------');
linkedList.getOddAndEvenList().odd.show();