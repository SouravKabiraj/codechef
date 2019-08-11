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
        console.log(sumOfBitDiff(inputs[testcase*2+2]));
    }
}

function sumOfBitDiff(inputs) {
    var result = 0;
    for(i=0;i<inputs.length-1;i++){
        for (j = i + 1; j < inputs.length;j++){
            var diffInNumber = inputs[i]^inputs[j];
            var setBitCount = getSetBitCount(diffInNumber);
            console.log(`[${inputs[i]}]->[${inputs[j]}] = ${setBitCount}`);
            result = result+ setBitCount;
        }
    }
    return result;
}

function getSetBitCount(num) {
    var count =0;
    while (num){
        num=num & (num-1);
        count++;
    }
    return count;
}