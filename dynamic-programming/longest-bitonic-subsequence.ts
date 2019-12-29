function getLongestIncreasingSequence(arr: number[]): number[] {
    const dpTable = [1];
    for (let i = 1; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (dpTable[j] > max && arr[j] <= arr[i]) {
                max = dpTable[j];
                dpTable[i] = dpTable[j];
            }
        }
        if (dpTable[i]) {
            dpTable[i] = dpTable[i] + 1;
        } else {
            dpTable[i] = 1;
        }
    }
    return dpTable;
}

function getLongestDecreasingSequence(arr: number[]): number[] {
    const dpTable = [0, 0, 0, 0, 0, 0, 0, 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        let max = 0;
        for (let j = arr.length - 1; j > i; j--) {
            if (dpTable[j] > max && arr[j] <= arr[i]) {
                max = dpTable[j];
                dpTable[i] = dpTable[j];
            }
        }
        if (dpTable[i]) {
            dpTable[i] = dpTable[i] + 1;
        } else {
            dpTable[i] = 1;
        }
    }
    return dpTable;
}

const longestDecreasingSequence = getLongestDecreasingSequence([1, 4, 2, 0, 3, 2, 6, 8]);
const longestIncreasingSequence = getLongestIncreasingSequence([1, 4, 2, 0, 3, 2, 6, 8]);

let max = 0;
for (let i = 0; i < longestDecreasingSequence.length; i++) {
    const count = longestDecreasingSequence[i] + longestIncreasingSequence[i];
    if (max < count) {
        max = longestDecreasingSequence[i] + longestIncreasingSequence[i];
    }
}

console.log(max);
