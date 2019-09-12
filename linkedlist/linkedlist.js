class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    addAtStart(element) {
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    insertAt(element, location) {
        if (location < 0 || location > this.size) {
        } else {
            const node = new Node(element);
            if (location == 0) {
                this.addAtStart(element);
            } else {
                let point = this.head;
                for (let i = 0; i < location - 1; i++, point = point.next) {
                }
                node.next = point.next;
                point.next = node;
            }
            this.size++;
        }
    }

    removeAtStart() {
        this.head = this.head.next;
        this.size--;
    }

    removeFrom(location) {
        if (location < 0 && location > this.size) {

        } else {
            if (!location) {
                this.removeAtStart();
            } else {
                let point = this.head;
                for (let i = 0; i < location - 1; i++, point = point.next) {
                }
                point.next = point.next.next;
            }
            this.size--;
        }
    }

    removeElement(element) {
        const point = this.head;
        while (point) {
            if (point.next.element == element) {
                point.next = point.next.next;
            }
            point = point.next;
        }
        if (point.element = element) {
            point = null;
        }
        if (this.head == element) {
            this.head = this.head.next;
        }
    }

    printList() {
        var curr = this.head;
        var str = "START";
        while (curr) {
            str += ' -> ' + curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

const linkList = new LinkedList();
linkList.add(1);
linkList.add(2);
linkList.add(3);
linkList.add(4);
linkList.add(5);
linkList.addAtStart(0);
linkList.addAtStart(-1);
linkList.addAtStart(-2);
linkList.insertAt(1000, 0);
linkList.removeElement(4);
linkList.printList();
