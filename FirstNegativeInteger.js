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
        var numberOfInputs = inputs[testcase * 3 + 1][0];
        console.log(...firstNegative(inputs[testcase * 3 + 2], inputs[testcase * 3 + 3][0]));
    }
}

function firstNegative(arr, window) {
    const result = [];
    for (index = 0; index < arr.length - window + 1; index++) {
        var temp = 0;
        for (j = index; j < index + window; j++) {
            if (!temp && arr[j] < 0) {
                temp = arr[j];
            }
        }
        result.push(temp);
    }
    return result;
}