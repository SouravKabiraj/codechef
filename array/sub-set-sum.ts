function getAllSubSetWithSum(arr: number[], sum: number) {
    let dp: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = [];
    }
    dp[0][0] = arr[0];
    getAllPossibleSum(arr, dp);
}

function getAllPossibleSum(inputs: number[], dp: number[][]): number[][] {
    return getSum(inputs, dp, 0, 0);
}

function getSum(inputs: number[], dp: number[][], start: number, end: number): number[][] {
    dp[start][end] == 5 && console.log(`[START_INDEX,END_INDEX] -> [${start},${end}]`);
    if (start + 1 < inputs.length && end + 1 < inputs.length) {
        if (dp[start + 1][end] == undefined) {
            dp[start + 1][end] = dp[start][end] - inputs[start];
            dp = getSum(inputs, dp, start + 1, end);
        }

        if (dp[start][end + 1] == undefined) {
            dp[start][end + 1] = dp[start][end] + inputs[end + 1];
            dp = getSum(inputs, dp, start, end + 1);
        }
        return dp;
    } else {
        return dp;
    }
}

getAllSubSetWithSum([1, 2, 3, 5, 4, 1], 5);
