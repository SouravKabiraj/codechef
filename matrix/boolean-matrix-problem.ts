function isBooleanMatrixProblem(mat: number[][]): number[][] {
    const row = [];
    const col = [];
    for (let i = 0; i < mat.length; i++) {
        row[i] = 0;
    }
    for (let j = 0; j < mat[0].length; j++) {
        col[j] = 0;
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (let i = 0; i < mat.length; i++) {
        if (row[i]) {
            for (let j = 0; j < mat[i].length; j++) {
                mat[i][j] = 1;
            }
        }
    }
    for (let j = 0; j < mat[0].length; j++) {
        if (col[j]) {
            for (let i = 0; i < mat.length; i++) {
                mat[i][j] = 1;
            }
        }
    }
    return mat;
}

const mat = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0]
];
console.log(isBooleanMatrixProblem(mat));
