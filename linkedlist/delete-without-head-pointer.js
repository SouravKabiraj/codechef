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
        console.log(deleteWithoutHeadPointer(inputs[testcase * 2 + 2]));
    }
}

function deleteWithoutHeadPointer(input) {

}

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.bottom = null;
    }

    get right() {
        this.right
    }

    set right(node) {
        this.right = node
    }

    get bottom() {
        this.bottom
    }

    set bottom(node) {
        this.bottom = node
    }
}
