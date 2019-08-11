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
        inputs.push(line.split(' ').map(_strInp => parseInt(_strInp))
)
    ;
})
    ;
    const T = inputs[0][0];
    for (testcase = 0; testcase < T; testcase++) {
        var numberOfInputs = inputs[testcase * 3 + 1][0];
        console.log(getKthSmallest(inputs[testcase * 3 + 2], inputs[testcase * 3 + 3][0]));
    }
}

var arr;

function getKthSmallest(inputs,k) {
    arr = inputs;
    var start = 0;
    var end = inputs.length-2;
    var elementPos = inputs.length-1;
    do {
        var actualPosition = getActualPosition(start, end, arr[elementPos]);
        swap(actualPosition,elementPos);
        if(actualPosition<k){
            start = actualPosition+1;
        }else if(actualPosition>k){
            end= actualPosition -2;
            elementPos= actualPosition -1;
        }else{
            break;
        }
    } while(1);

}

function getActualPosition(start, end, element) {
    var p = start - 1;
    var targetElement = element;
    for (index = start; index <= end; index++) {
        if (targetElement < arr[index]) index++;
        else {
            p=preSwapOp(p);
            swap(p, index);
        }
    }
    console.log('P=>'+p);
    return p+1;
}

function preSwapOp(pivotPos) {
    return pivotPos++;
}

function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}