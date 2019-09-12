class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    add(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }

    show() {
        let pointer = this.head;
        while (pointer) {
            console.log(` --> ${pointer.element}`);
            pointer = pointer.next;
        }
    }
}

function countPairWhoseSumIsEqToX(arr1, arr2, x) {
    let pair = 0;
    const linkList1 = new LinkList();
    const linkList2 = new LinkList();
    arr1.forEach(element => {
        linkList1.add(element);
    });
    arr2.forEach(element => {
        linkList2.add(element);
    });

    for (let link1 = linkList1.head; link1 != null; link1 = link1.next) {
        for (let link2 = linkList2.head; link2 != null; link2 = link2.next) {
            if (link1.element + link2.element == x) {
                pair++;
            }
        }
    }
    return pair;
}


console.log(countPairWhoseSumIsEqToX([1, 2, 3, 4, 5, 6], [11, 12, 13], 15));