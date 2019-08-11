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
        console.log(maxStructArray(inputs[testcase*2+2]));
    }
}

function maxStructArray(inputList) {
    const heightList = getHeights(inputList);
    var max = -100000000000000;
    heightList.forEach(_height=>{
        max = max<_height.toIns()?_height.toIns(): max;
    });
    return max;
}

function getHeights(inputList) {
    const bucket = [];
    for(i=0;i<inputList.length;i=i+2){
        bucket.push(new Height(inputList[i],inputList[i+1]));
    }
    return bucket;
}

class Height{
    constructor(fts,ins){
        this.fts=fts?fts:0;
        this.ins=ins?ins:0;
    }

    toIns(){
        return this.fts*12 + this.ins;
    }
}