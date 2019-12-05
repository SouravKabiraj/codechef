function getMaxSumRect(arr: number[][]) {
    let max = -99999999999999;
    for (let r = 1; r < arr.length; r++) {
        for (let c = 1; c < arr[r].length; c++) {
            const maxMatrixSum = getMaxMatrixSum(arr, r, c);
            if (max < maxMatrixSum) {
                max = maxMatrixSum;
            }
        }
    }
    return max;
}

function getMaxMatrixSum(arr: number[][], r: number, c: number): number {
    let max = -99999999999999;

    for (let i = 0; i < arr.length - r; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length - c; j++) {
            if (!j) {
                sum = calculateSum(arr, r, c, i);
            } else {
                sum = getSumAfterRightShift(arr, r, c, i, j);
            }
            max = max < sum ? sum : max;
        }
    }

    return max;
}


function getSumAfterRightShift(arr: number[][], r: number, c: number, x: number, y: number): number {
    let sum = 0;
    for (let i = x; i < r + x; i++) {
        sum = sum - arr[i][y];
        sum = sum + arr[i][y + c];
    }
    return sum;
}

function calculateSum(arr: number[][], r: number, c: number, x: number): number {
    let sum = 0;
    for (let i = x; i < x + r; i++) {
        for (let j = 0; j < c; j++) {
            sum = sum + arr[i][j];
        }
    }
    console.log(`${r} ${c} ${x} ----> ${sum} `);
    return sum;
}

const arr = [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]];
console.log(getMaxSumRect(arr));
