function longestIncreasingSubsequence(inputs: number[]) {
    const lis = [];
    for (let i = 0; i < inputs.length; i++) {
        lis[i] = 1;
    }

    for (let i = 1; i < inputs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (inputs[j] < inputs[i] && lis[j] + 1 > lis[i]) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    console.log(lis);
    return Math.max(...lis);
}

console.log(longestIncreasingSubsequence([1, 0, 2, 3, 4, 0, 7, 6, 9]));
