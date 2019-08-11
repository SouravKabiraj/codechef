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
        console.log(rotate(inputs[testcase*2+2],inputs[testcase*2+1][1]));
    }
}

function rotate(inputs, D) {
    firstSlice = inputs.slice(0,D);
    secondSlice = inputs.slice(D,inputs.length-1);
    return secondSlice.concat(firstSlice);
}