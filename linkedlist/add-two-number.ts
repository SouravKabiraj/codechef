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

function main() {
    const linklist1 = new Linklist();
    linklist1.add(1);
    linklist1.add(2);
    linklist1.add(3);
    linklist1.add(6);
    const linklist2 = new Linklist();
    linklist2.add(1);
    linklist2.add(9);
    linklist2.add(3);
    linklist2.add(4);
    add(linklist1, linklist2).show();
}

main();

function addNumber(i: number, j: number, r: number): { ans: number, r: number } {
    const sum = i + j + r;
    const ans = sum >= 10 ? (sum - 10) : sum;
    return {ans: ans, r: sum >= 10 ? 1 : 0};
}

function add(number1: Linklist, number2: Linklist): Linklist {
    const result = new Linklist();
    let pointer1 = number1.head;
    let pointer2 = number2.head;
    let reminder = 0;
    while (pointer1 || pointer2) {
        const numberOne = pointer1 ? pointer1.element : 0;
        const numberTwo = pointer2 ? pointer2.element : 0;
        const ans = addNumber(numberOne, numberTwo, reminder).ans;
        reminder = addNumber(numberOne, numberTwo, reminder).r;
        result.add(ans);
        pointer1 = pointer1 ? pointer1.next : null;
        pointer2 = pointer2 ? pointer2.next : null;
    }
    if (reminder) {
        result.add(reminder);
    }
    return result;
}

