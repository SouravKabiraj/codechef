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
        var inputArr = inputs[testcase * 2 + 1][0].toUpperCase();
        var pattrn = inputs[testcase * 2 + 2][0].toUpperCase();
        countOfPattern(inputArr, pattrn);
    }
}

function countOfPattern(input, pattren) {
    let result = 0;
    let countINP = [];
    let countPat = [];
    AtoZ.forEach(item => {
        countINP[item] = 0;
        countPat[item] = 0;
    })
    pattren.split('').forEach(item => {
        countPat[item] ? countPat[item]++ : countPat[item] = 1;
    });
    input.split('').slice(0, pattren.length).forEach(item => {
        countINP[item] ? countINP[item]++ : countINP[item] = 1;
    });

    if (isEqual(countINP, countPat)) {
        result++;
        // console.log(`${result}`);
    }

    for (index = 1; index < input.length - pattren.length + 1; index++) {
        countINP[input[index - 1]] = countINP[input[index - 1]] - 1;
        countINP[input[index + pattren.length - 1]] = countINP[input[index + pattren.length - 1]] + 1;
        // console.log(`${input[index - 1]}--`);
        // console.log(`${input[index + pattren.length - 1]}++`);
        if (isEqual(countINP, countPat)) {
            result++;
            // console.log(`${result}`);
        }
    }
    console.log(result);
}

function isEqual(window1, window2) {
    let ret = true;
    AtoZ.forEach(letter => {
        // console.log(`${letter} ---> ${window1[letter]}   ----     ${window2[letter]}`);
        if (window1[letter] !== window2[letter]) {
            ret = false;
        }
    });
    // console.log('-------------------------------------------------------');
    return ret;
}

const AtoZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
