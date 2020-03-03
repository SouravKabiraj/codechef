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
        var numberOfInputs = inputs[testcase * 1 + 1][0];
        console.log(maxProduct(inputs[testcase * 1 + 2]));
    }
}

function maxProduct(arr) {
    const bigTwo = [0, 0];
    const smallTwo = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (bigTwo[0] < arr[i]) {
            bigTwo[0] = arr[i];
        } else if (bigTwo[1] < arr[i]) {
            bigTwo[1] = arr[i];
        }

        if (smallTwo[0] > arr[i]) {
            smallTwo[0] = arr[i];
        } else if (smallTwo[1] > arr[i]) {
            smallTwo[1] = arr[i];
        }
    }
    const bigProd = bigTwo[0] * bigTwo[1];
    const smallProd = smallTwo[0] * smallTwo[1];
    return bigProd > smallProd ? {a: bigTwo[0], b: bigTwo[1]} : {a: smallTwo[0], b: smallTwo[1]};
}

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}
