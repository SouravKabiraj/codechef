function getCoinGoldMineProblem(M: number[][], i: number, j: number): number {
    if (j === M[0].length - 1) {
        console.log(`${i} ${j} ${M[i][j]}`);
        return M[i][j];
    } else {
        const way1 = i - 1 >= 0 ? getCoinGoldMineProblem(M, i - 1, j + 1) : 0;
        const way2 = i + 1 < M.length ? getCoinGoldMineProblem(M, i + 1, j + 1) : 0;
        const way3 = getCoinGoldMineProblem(M, i, j + 1);
        const number = Math.max(way1, way2, way3) + M[i][j];
        console.log(`${i} ${j} ${number}`);
        return number;
    }
}


function getCoinGoldMineProblemDp(M: number[][]): number {
    for (let j = M[0].length - 2; j >= 0; j--) {
        for (let i = 0; i < M.length; i++) {
            const mElementElement = i + 1 < M.length ? M[i + 1][j + 1] : 0;
            const nElementElement1 = M[i][j + 1];
            const oElementElement1 = i - 1 >= 0 ? M[i - 1][j + 1] : 0;
            M[i][j] = M[i][j] + Math.max(mElementElement, nElementElement1, oElementElement1);
        }
    }
    console.log(M);
    return;
}

const M = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2]
];

console.log(getCoinGoldMineProblemDp(M));
