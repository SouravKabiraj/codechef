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
        inputs.push(line.split(' ').map(_strInp => _strInp));
    });
    const T = parseInt(inputs[0][0]);
    for (testcase = 0; testcase < T; testcase++) {
        var input = inputs[testcase * 2 + 2]
        console.log(countZeros(input));
    }
}

function countZeros(input) {
    if (input[input.length - 1] == 1) {
        return 0;
    } else if (input[0] == 0) {
        return input.length;
    } else {
        console.log(`${input}`);
        const firstIndex = firstZeroIndex(input, 0, input.length - 1);
        console.log(`${input.length} - ${firstIndex}`);
        return input.length - firstIndex;
    }
}

function firstZeroIndex(input, start, end) {
    const mid = parseInt((start + end) / 2);
    if (input[mid] == 0 && input[mid - 1] == 1) {
        return mid;
    } else if (input[mid] == 1) {
        return firstZeroIndex(input, mid, end);
    } else if (input[mid] == 0) {
        return firstZeroIndex(input, start, mid);
    }
}
