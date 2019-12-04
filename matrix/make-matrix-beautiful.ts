function getMinMove(mat: number[][]): number {
    const rowSum = [];
    const colSum = [];
    for (let i = 0; i < mat.length; i++) {
        rowSum[i] = 0;
        for (let j = 0; j < mat[i].length; j++) {
            rowSum[i] = rowSum[i] + mat[i][j];
            colSum[j] = (!colSum[j]) ? mat[i][j] : colSum[j] + mat[i][j];
        }
    }
    let count = 0;
    const maxRow = getMaxItem(rowSum);
    const maxCol = getMaxItem(colSum);
    const max = getMaxItem([maxCol, maxRow]);
    for (let i = 0, j = 0; i < mat.length && j < mat[i].length;) {

        const minDiff = getMinItem([(max - rowSum[i]), (max - colSum[j])]);
        mat[i][j] = mat[i][j] + minDiff;
        rowSum[i] = rowSum[i] + minDiff;
        colSum[j] = colSum[j] + minDiff;
        count = count + minDiff;

        if (max === rowSum[i]) {
            i++;
        }
        if (max === colSum[j]) {
            j++;
        }
    }
    return count;
}


function getMaxItem(arr: number[]): number {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max;
    }
    return max;
}

function getMinItem(arr: number[]): number {
    let min = 99999999999999999999999999999;
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
    }
    return min;
}

const mat = [
    [1, 2, 3],
    [4, 2, 3],
    [3, 2, 1]
];
console.log(getMinMove(mat));