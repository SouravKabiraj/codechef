function getMaxValuePath(mat: number[][]) {
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            const left = j !== 0 ? mat[i - 1][j - 1] : 0;
            const mid = mat[i - 1] [j];
            const right = j !== mat.length - 1 ? mat[i - 1][j + 1] : 0;
            mat[i][j] = max(left, mid, right) + mat[i][j];
        }
    }
    console.log(mat);
}


const mat = [
    [1, 2, 3, 9],
    [9, 2, 100, 9],
    [1, 2, 3, 9],
    [10, 2, 9, 9],
];
getMaxValuePath(mat);

function max(a: number, b: number, c: number): number {
    return Math.max(Math.max(a, b), c);
}
