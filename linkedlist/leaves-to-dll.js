class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

class TwoWayLinkedList {
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
            while (current.right) {
                current = current.right;
            }
            current.right = node;
            node.left = current;
        }
        this.size++;
    }

    addNode(node) {
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.right) {
                current = current.right;
            }
            current.right = node;
            node.left = current;
        }
        this.size++;
    }

    addAtStart(element) {
        const node = new Node(element);
        node.right = this.head;
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
                for (let i = 0; i < location - 1; i++, point = point.right) {
                }
                node.right = point.right;
                point.right = node;
            }
            this.size++;
        }
    }

    removeAtStart() {
        this.head = this.head.right;
        this.size--;
    }

    removeFrom(location) {
        if (location < 0 && location > this.size) {

        } else {
            if (!location) {
                this.removeAtStart();
            } else {
                let point = this.head;
                for (let i = 0; i < location - 1; i++, point = point.right) {
                }
                point.right = point.right.right;
            }
            this.size--;
        }
    }

    removeElement(element) {
        const point = this.head;
        while (point) {
            if (point.right.element == element) {
                point.right = point.right.right;
            }
            point = point.right;
        }
        if (point.element = element) {
            point = null;
        }
        if (this.head == element) {
            this.head = this.head.right;
        }
    }

    printList() {
        var curr = this.head;
        var str = "START";
        while (curr) {
            str += ' -> ' + JSON.stringify(curr.element) + " ";
            curr = curr.right;
        }
        console.log(str);
    }
}

function LeavesToDLL(root, dll) {
    if (!root) {
    } else if (root.left && root.right) {
        dll = LeavesToDLL(root.left, dll);
        dll = LeavesToDLL(root.right, dll);
    } else if (root.left) {
        dll = LeavesToDLL(root.left, dll);
    } else if (root.right) {
        dll = LeavesToDLL(root.right, dll);
    } else {
        dll.addNode(root);
    }
    return dll;
}


// #tree creation
const p1 = new Node(1);
const p2 = new Node(2);
const p3 = new Node(3);
const p4 = new Node(4);
const p5 = new Node(5);
const p6 = new Node(6);
const p7 = new Node(7);
const p8 = new Node(8);
const p9 = new Node(9);

p1.left = p2;     //             p1
p1.right = p3;    //     p2              p3
p2.left = p4;    //   p4     p5      p6      p7
p2.right = p5;
p3.left = p6;
p3.right = p7;
p7.left = p8;
p5.right = p9;
//  End tree creation


const dll = new TwoWayLinkedList();
const leavesToDLL = LeavesToDLL(p1, dll);
leavesToDLL.printList();
