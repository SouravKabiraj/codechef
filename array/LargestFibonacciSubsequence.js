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
    inputLines.forEach(line=>{
        inputs.push(line.split(' ').map(_strInp => parseInt(_strInp)));
});
    const T = inputs[0][0];
    for(testcase=0;testcase<T;testcase++){
        var numberOfInputs = inputs[testcase*2+1][0];
        largestFibSubSequence(inputs[testcase*2+2]);
    }
}

function largestFibSubSequence(inputs){
    inputs.forEach(input => {
        isFibbonacci(input)? console.log(`${input} `): console.log(``);
    });
}

function isFibbonacci(n) {
    const element1 = (5*n*n + 4);
    const element2  =(5*n*n - 4);
    const sqrtEle1 = Math.sqrt(element1);
    const sqrtEle2 = Math.sqrt(element2);
    return (Math.pow(sqrtEle1,2) === element1) || (Math.pow(sqrtEle2,2) === element2);
}