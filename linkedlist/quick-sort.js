process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const inputLines = input.split('\n');
    const inputs = [];
    inputLines.forEach(line => {
        inputs.push(line.split(' ').map(_strInp => parseInt(_strInp)));
    });
    const T = inputs[0][0];
    for (testcase = 0; testcase < T; testcase++) {
        console.log(quickSort(inputs[testcase * 2 + 2]));
    }
}

function quickSort(array) {
    const linkListPointer = arrayToLinkList(array);
    sort(linkListPointer);
    for (point = linkListPointer; point.next != null; point = point.next) {
        console.log(point.value);
    }
}

function sort(start) {
    if (start.next == null) {
        let pivot = partition(start);
        sort(start);
        sort(pivot + 1);
    }
}

function partition(start) {
    let pivot;
    for (pivot = start; pivot.next != null; pivot = pivot.next) {
    }
    let i = start;

    for (point = start; point.next != null; point = point.next) {
        if (point.value <= pivot.value) {
            temp = point.value;
            point.value = i.value;
            i.value = temp;
            i = i.next;
        }
    }

    temp = i.value;
    i.value = pivot.value;
    pivot.value = temp;

    return i;
}

function arrayToLinkList(array) {
    const root = new Node(array[0]);
    let point = root;
    for (i = 1; i < array.length; i++, point = point.next) {
        point.next = new Node(array[i]);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    get next() {
        return this.next;
    }

    set next(node) {
        this.next = node;
    }
}
