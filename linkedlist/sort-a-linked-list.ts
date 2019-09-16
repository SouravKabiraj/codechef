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

function getMidButOne(head: LinklistNode): LinklistNode {
    let pointer = head;
    let mid = head;
    let midButOne = mid;
    while (pointer.next != null) {
        pointer = pointer.next.next;
        midButOne = mid;
        mid = mid.next;
        if (!pointer) {
            break;
        }
    }
    return midButOne;
}

function margeSort(head: LinklistNode): LinklistNode {
    if (!head.next) {
        return head;
    }
    if (head != null) {
        const midButOne = getMidButOne(head);
        const linklist2 = margeSort(midButOne.next);
        midButOne.next = null;
        const linklist1 = margeSort(head);
        return marge(linklist1, linklist2);
    }
}

function marge(head: LinklistNode, mid: LinklistNode): LinklistNode {
    let i = head;
    let j = mid;
    const linkedList = new Linklist();
    while (i != null && j != null) {
        if (i.element > j.element) {
            linkedList.add(j.element);
            j = j.next;
        } else {
            linkedList.add(i.element);
            i = i.next;
        }
    }
    if (i != null) {
        while (i != null) {
            linkedList.add(i.element);
            i = i.next;
        }
    }
    if (j != null) {
        while (j != null) {
            linkedList.add(j.element);
            j = j.next;
        }
    }
    return linkedList.head;
}

let linklist = new Linklist();
linklist.add(7);
linklist.add(1);
linklist.add(4);
linklist.add(2);
linklist.add(6);
linklist.add(3);
linklist.add(5);
linklist.add(2);
linklist.add(6);
linklist.add(3);
linklist.add(5);

let sortedListHead = margeSort(linklist.head);
let sortedLinklist = new Linklist();
sortedLinklist.head = sortedListHead;
sortedLinklist.show();
