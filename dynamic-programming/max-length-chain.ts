function getMaxLengthChain(arr: number[][]): number {
    const DP: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        DP.push([]);
        for (let j = 0; j < arr.length; j++) {
            DP[i][j] = i === j ? 1 : 0;
        }
    }

    for (let len = 2; len <= arr.length; len++) {
        for (let i = 0; i < arr.length - len + 1; i++) {
            const j = i + len - 1;
            console.log(`${i} ${j} ${arr[i][1]} ${arr[j][0]} ${arr[i][1] < arr[j][0]}`);
            DP[i][j] = arr[j - 1][1] < arr[j][0] ? DP[i][j - 1] + 1 : DP[i][j - 1];
        }
    }

    console.log(DP);
    return;
}

getMaxLengthChain([[5, 24], [39, 60], [15, 28], [27, 40], [50, 90]]);
