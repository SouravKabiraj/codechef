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
        var input = inputs[testcase * 2 + 2];
        retateMatrix(input);
    }
}

function retateMatrix(input) {
    let matrix = getMatrix(input);
    matrix = transpose(matrix);
    // console.log(...matrix);
    matrix = mirrorMatrix(matrix);
    console.log(...matrix);
}

function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i < j) {
                matrix = swap(matrix, new Point(i, j), new Point(j, i));
            }
        }
    }
    return matrix;
}

function reverseColumns(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0, k = matrix.length - 1; j < k; j++, k--) {
            matrix = swap(matrix, new Point(j, i), new Point(k, i));
        }
    }
    return matrix;
}

function mirrorMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            matrix = swap(matrix, new Point(i, j), new Point(i, matrix.length - 1 - j));
        }
    }
    return matrix;
}

function getMatrix(input) {
    let arr = [];
    let index = 0;
    const n = Math.sqrt(input.length)
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr [i][j] = input[index];
            index++;
        }
    }
    return arr;
}

function swap(arr, point1, point2) {
    const temp = arr[point1.i][point1.j];
    arr[point1.i][point1.j] = arr[point2.i][point2.j];
    arr[point2.i][point2.j] = temp;
    return arr;
}

class Point {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
}
