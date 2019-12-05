function getCoil1(mat: number[][]): number[] {
    const coil = [];
    let width = mat.length / 4;
    for (let i = mat.length - 1 - width; i >= 0; i--) {
        for (let j = width; j < 2 * width; j++) {
            coil.push(mat[i][j]);
        }
    }

    for (let j = 2 * width; j < 3 * width; j++) {
        for (let i = 0; i < width; i++) {
            coil.push(mat[i][j]);
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 3 * width; j < 4 * width; j++) {
            coil.push(mat[i][j]);
        }
    }
    return coil;
}

function sideMirror(mat: number[][]): void {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length / 2; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[i][mat.length - j - 1];
            mat[i][mat.length - j - 1] = temp;
        }
    }
}

function upDownMirror(mat: number[][]): void {
    for (let i = 0; i < mat.length / 2; i++) {
        for (let j = 0; j < mat.length; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[mat.length - i - 1][j];
            mat[mat.length - i - 1][j] = temp;
        }
    }
}

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
console.log(getCoil1(mat));
sideMirror(mat);
upDownMirror(mat);
console.log(getCoil1(mat));
