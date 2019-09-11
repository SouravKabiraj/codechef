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
    const T = parseInt(inputs[0][0]);
    for (testcase = 0; testcase < T; testcase++) {
        var input = inputs[testcase * 2 + 2];
        console.log(greaterOnRight(input));
    }
}

function greaterOnRight(input) {
    input = [...input, -1];
    for (i = input.length - 2; i >= 0; i--) {
        console.log(input[i]);
        input[i] = (input[i] < input[i + 1]) ?
            input[i + 1] : input[i];

    }
    return input.slice(1);
}
