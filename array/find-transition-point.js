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
        console.log(transitionPoint(inputs[testcase * 2 + 2]));
    }
}

function transitionPoint(inputs) {
    let point = 0;
    for (let index = 0; index < inputs.length - 1; index++) {
        if (inputs[index] != inputs[index + 1]) {
            point = index + 1;
        }
    }
    return point;
}