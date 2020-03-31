function getMaxNumberOfBooks(arr: number[], size: number): number {
    const DP: number[] = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        DP[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= size) {
            DP[i] = i === 0 ? arr[i] : DP[i - 1] + arr[i];
            max = Math.max(max, DP[i]);
        }
    }
    console.log(DP);
    return max;
}

console.log(getMaxNumberOfBooks([3, 2, 2, 3, 1, 1, 1, 3], 1));
