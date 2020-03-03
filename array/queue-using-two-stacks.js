// function processData(input) {
//     const inputLines = input.split('\n');
//     const inputs = [];
//     inputLines.forEach(line => {
//         inputs.push(line.split(' ').map(_strInp => parseInt(_strInp)));
//     });
//     const T = parseInt(inputs[0][0]);
//     const queue = new Queue();
//     for (testcase = 0; testcase < T; testcase++) {
//         var type = inputs[testcase * 1 + 0][0];
//         switch(type){
//             case 1:
//                 queue.enqueue(inputs[testcase * 1 + 0][1]);
//                 break;
//             case 2:
//                 queue.dequeue();
//                 break;
//             case 3:
//                 queue.show();
//                 break;
//         }
//     }
// }
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//     processData(_input);
// });

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.pop();
        this.stack1 = this.stack2;
        this.stack2 = [];
    }

    show() {
        console.log(this.stack1[0]);
    }
}


const queue = new Queue();
queue.enqueue(76);
queue.enqueue(33);
queue.dequeue();
queue.enqueue(23);
queue.enqueue(97);
queue.enqueue(21);
queue.show();
queue.show();
queue.enqueue(74);
queue.show();

// 10
// 1 76
// 1 33
// 2
// 1 23
// 1 97
// 1 21
// 3
// 3
// 1 74
// 3