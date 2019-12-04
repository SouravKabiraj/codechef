function completeSudoku(mat: number[][], i: number, j: number, n: number): boolean {
    if (i === n && j === n) {
        return true;
    }
    if (mat[i][j] !== 0) {
        const nxt = getNextPoint(n, i, j);
        return completeSudoku(mat, nxt.x, nxt.y, n);
    } else {
        for (let x = 1; x < 10; x++) {
            mat[i][j] = x;
            if (isValidMove(mat, i, j, n)) {
                if (i === n - 1 && j === n - 1) {
                    return true;
                }
                const nxt = getNextPoint(n, i, j);
                if (completeSudoku(mat, nxt.x, nxt.y, n)) {
                    return true;
                }
            }
        }
        return false;
    }
}

function isValidMove(mat: number[][], i: number, j: number, n: number): boolean {
    const gridNumber = getGridNumber(i, j);
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (i === x && j === y) {
                continue;
            }
            if ((i == x || j == y) && mat[i][j] === mat[x][y]) {
                return false;
            } else if ((getGridNumber(x, y) === gridNumber) && mat[i][j] === mat[x][y]) {
                return false;
            }

        }
    }
    return true;
}

function getNextPoint(n: number, i: number, j: number): { x: number, y: number } {
    if (i === n - 1 && j === n - 1) {
        return {x: n, y: n};
    } else if (j === n - 1) {
        return {x: i + 1, y: 0};
    } else if (j < n - 1) {
        return {x: i, y: j + 1};
    } else {
        return null;
    }
}

function getGridNumber(i: number, j: number): { gx: number, gy: number } {
    const grid = {gx: parseInt((i / 3) + ''), gy: parseInt((j / 3) + '')};
    return grid;
}

const sudoku = [
    [3, 6, 7, 5, 3, 5, 6, 2, 9],
    [1, 2, 7, 0, 9, 3, 6, 0, 6],
    [2, 6, 1, 8, 7, 9, 2, 0, 2],
    [3, 7, 5, 9, 2, 2, 8, 9, 7],
    [3, 6, 1, 2, 9, 3, 1, 9, 4],
    [7, 8, 4, 5, 0, 3, 6, 1, 0],
    [6, 3, 2, 0, 6, 1, 5, 5, 4],
    [7, 6, 5, 6, 9, 3, 7, 4, 5],
    [2, 5, 4, 7, 4, 4, 3, 0, 7]
];

console.log(completeSudoku(sudoku, 0, 0, 9));
console.log(JSON.stringify(sudoku));