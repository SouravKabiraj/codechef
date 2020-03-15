function getMinSumPartitions(arr: number[]): number[] {
    const sum = arr.reduce((a, b) => a + b, 0);
    const DP = [];
    for (let i = 0; i < arr.length; i++) {
        DP.push([]);
        for (let j = 0; j <= Math.floor(sum / 2); j++) {
            if (j == 0) {
                DP[i].push(true);
            } else if (arr[i] > j) {
                if (i - 1 >= 0) {
                    DP[i][j] = DP[i - 1][j];
                } else {
                    DP[i][j] = false;
                }
            } else if (arr[i] == j) {
                DP[i][j] = true;
            } else {
                if (i != 0 && DP[i - 1][j]) {
                    DP[i][j] = true;
                } else {
                    if (i - 1 >= 0 && j - arr[i] >= 0) {
                        console.log(j - arr[i]);
                        console.log(DP[i - 1][j - arr[i]]);
                        DP[i][j] = DP[i - 1][j - arr[i]];
                        console.log(`i ${i} j ${j}`);
                    } else {
                        DP[i][j] = false;
                    }
                }
            }
        }
    }
    return DP;
}

console.log(getMinSumPartitions([36, 7, 46, 40]));
