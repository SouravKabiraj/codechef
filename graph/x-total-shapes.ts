function getXGroupCount(input: string[][]) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 'X') {
                count++;
                input = markGroup(input, i, j);
            }
        }
    }
    return count;
}

function markGroup(input: string[][], i: number, j: number): string[][] {
    // console.log(`------ i : ${i} | j : ${j} --------`);
    if (i < 0 || j < 0 || input.length <= i || input[i].length <= j) {
        return input;
    } else {
        if (input[i][j] === 'X') {
            // console.log(`i : ${i} | j : ${j}`);
            input[i][j] = 'O';
            input = markGroup(input, i + 1, j);
            input = markGroup(input, i - 1, j);
            input = markGroup(input, i, j + 1);
            input = markGroup(input, i, j - 1);
            return input;
        } else {
            return input;
        }
    }
}

const arr = [
    ['O', 'X', 'X', 'O'],
    ['X', 'X', 'X', 'O'],
    ['O', 'X', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'O'],
];

console.log(getXGroupCount(arr));