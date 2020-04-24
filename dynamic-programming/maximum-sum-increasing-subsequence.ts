function getSumOfMaxSubSeq(arr: number[]): void {
    const DP: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        DP.push([]);
        for (let j = i; j < arr.length; j++) {
            if (j == i) {
                DP[i][j] = arr[j];
            } else {
                DP[i][j] = DP[i][j - 1] + (arr[i] <= arr[j] ? arr[j] : 0);
            }
        }
    }
    console.log(DP);
}

getSumOfMaxSubSeq([10, 1, 2, 3, 100]);
