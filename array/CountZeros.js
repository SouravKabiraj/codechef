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
        var numberOfInputs = inputs[testcase * 2 + 1][0];
        console.log(CountZero(inputs[testcase * 2 + 2]));
    }
}

function CountZero(inputs) {
    let firstZeroIndex = getFirstZeroIndex(inputs, 0, inputs.length-1);
    return firstZeroIndex ? inputs.length - firstZeroIndex - 1 : (inputs[inputs.length - 1] ? 0 : inputs.length);
}

function getFirstZeroIndex(inputs, start, end) {
    const mid = parseInt((end + start) / 2);
    if (inputs[end] === 1) {
        return null;
    }
    if (start === end) {
        return null;
    }
    if (inputs[mid - 1] > inputs[mid]) return mid;
    else {
        if (inputs[mid] === 0)
            return getFirstZeroIndex(inputs, start, mid);
        else
            return getFirstZeroIndex(inputs, mid, end);
    }
}