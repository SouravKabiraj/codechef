function getNumberOfWays(N: number, arr: number[], index: number): number {
    if (N < 0) {
        return 0;
    } else if (N == 0) {
        return 1;
    } else if (index === arr.length) {
        return 0;
    } else {
        const waysByIncludingIndexThElement = getNumberOfWays(N - arr[index], arr, index + 1);
        const waysByNotIncludingIndexThElementh = getNumberOfWays(N, arr, index + 1);
        const waysByIncludingSameIndexThElementh = getNumberOfWays(N - 2 * arr[index], arr, index);
        console.log(`N->${N}`);
        console.log(`arr[index]->${arr[index]}`);
        console.log(`waysByIncludingIndexThElement = > ${waysByIncludingIndexThElement}`);
        console.log(`waysByNotIncludingIndexThElementh = > ${waysByNotIncludingIndexThElementh}`);
        console.log(`waysByIncludingSameIndexThElementh = > ${waysByIncludingSameIndexThElementh}`);
        return waysByIncludingIndexThElement + waysByNotIncludingIndexThElementh + waysByIncludingSameIndexThElementh;
    }
}


function getNumberOfWaysDP(N: number, arr: number[]): number {
    const DP: number[][] = [];
    for (let coinInd = 0; coinInd < arr.length; coinInd++) {
        DP.push([]);
        for (let sum = 0; sum <= N; sum++) {
            DP[coinInd][sum] = 0;
        }
    }

    for (let coinInd = 0; coinInd < arr.length; coinInd++) {
        for (let sum = 0; sum <= N; sum++) {
            if (coinInd === 0) {
                DP[coinInd][sum] = sum % arr[coinInd] ? 0 : 1;
            } else if (sum - arr[coinInd] >= 0) {
                let way1 = 0;
                let way2 = 0;
                way1 = DP[coinInd - 1][sum - arr[coinInd]];
                way2 = DP[coinInd][sum - arr[coinInd]];
                const way3 = DP[coinInd - 1][sum];
                DP[coinInd][sum] = way1 + way2 + way3;
            }
        }
    }
    console.log(DP);
    return DP[arr.length - 1][N];
}

console.log(getNumberOfWaysDP(4, [1, 2, 3]));
