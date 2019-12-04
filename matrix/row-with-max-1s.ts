function getMax1sRow(mat: number [][]): number {
    let pointer = 0;
    let flag = true;
    let row;
    while (flag) {
        for (let i = 0; i < mat.length; i++) {
            if (mat[i][pointer] === 1) {
                flag = false;
                row = i;
                break;
            }
        }
        pointer++;
    }

    return row;
}

const mat = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1],
];
console.log(getMax1sRow(mat));