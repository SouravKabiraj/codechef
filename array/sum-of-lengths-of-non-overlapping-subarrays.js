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
        var array = inputs[testcase * 3 + 2];
        let element = inputs[testcase * 3 + 3][0];
        console.log(sumOfLengthsOfNonOverlappingSubarrays(array, element));
    }
}

function sumOfLengthsOfNonOverlappingSubarrays(array, element) {
    for()
}
