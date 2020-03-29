// Wrong solution !....
function getMostEfficientWay(arr: number[]): string {
    const DP: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        DP.push([]);
        for (let j = 0; j < arr.length; j++) {
            DP[i][j] = i == j ? 0 : 1;
        }
    }

    for (let len = 2; len <= arr.length; len++) {
        for (let i = 0; i < arr.length - len + 1; i++) {
            const j = i + len - 1;
            DP[i][j] = 9999999999;
            for (let k = i; k < j; k++) {
                const q = DP[i][k] + DP[k + 1][j] + arr[i] * arr[k + 1] * arr[j];
                if (q < DP[i][j]) {
                    DP[i][j] = q;
                }
            }
            console.log(`${i} - ${j} = ${DP[i][j]}`);
        }
    }
    console.log(DP);
    return;
}

getMostEfficientWay([3, 3, 3]);
