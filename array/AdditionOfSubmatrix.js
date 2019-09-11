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
        var M = inputs[testcase * 3 + 1][0];
        var N = inputs[testcase * 3 + 1][1];
        var X1 = inputs[testcase * 3 + 3][0];
        var Y1 = inputs[testcase * 3 + 3][1];
        var X2 = inputs[testcase * 3 + 3][2];
        var Y2 = inputs[testcase * 3 + 3][3];
        var array = GetArray(inputs[testcase * 3 + 2], M, N);
        console.log(SubMatrixAddition(array, X1, Y1, X2, Y2));
    }
}

function GetArray(inputs, M, N) {
    const array = [];
    count = 0;
    for (index = 0; index < M; index++) {
        for (jndex = 0; jndex < N; jndex++) {
            if (!array[jndex]) {
                array[jndex] = [];
            }
            array[jndex][index] = inputs[count];
            count++;
        }
    }
    return array;
}

function SubMatrixAddition(array, X1, Y1, X2, Y2) {
    let result = 0;
    for (i = X1 - 1; i < X2; i++) {
        for (j = Y1 - 1; j < Y2; j++) {
            result = result + array[j][i];
        }
    }
    return result;
}