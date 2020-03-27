function getLargestSqure(arr: number[][]): number {
    const DP: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        DP[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (i == 0 || j == 0) {
                DP[i][j] = arr[i][j];
            } else {
                DP[i][j] = 0;
            }

        }
    }
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            const isSqure = arr[i][j] && (DP[i - 1][j - 1] * DP[i - 1][j] * DP[i][j - 1]);
            DP[i][j] = isSqure ? Math.min(DP[i - 1][j - 1], DP[i - 1][j], DP[i][j - 1]) + 1 : arr[i][j];
            max = Math.max(DP[i][j], max);
        }
    }
    // console.log(DP);
    return max;
}


const arr = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1]
];
console.log(getLargestSqure(arr));
