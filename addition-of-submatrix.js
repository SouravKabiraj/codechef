process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
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
        var m = inputs[testcase * 3 + 1][1];
        var n = inputs[testcase * 3 + 1][0];
        var x1 = inputs[testcase * 3 + 3][0]-1;
        var y1 = inputs[testcase * 3 + 3][1]-1;
        var x2 = inputs[testcase * 3 + 3][2]-1;
        var y2 = inputs[testcase * 3 + 3][3]-1;
        additionOfSubMatrix(inputs[testcase * 3 + 2], m, n, x1, y1, x2, y2);
    }
}

function additionOfSubMatrix(inputs, m, n, x1, y1, x2, y2) {
    let count = 0;
    let index = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if ((i >= x1) && (j >= y1) && (i <= x2) && (j <= y2)) {
                count = count + inputs[index];
            }
            index++;
        }
    }
    console.log(count);
}
