function getNumberOfWays(length: number): number {
    const DP: number[] = [];
    for (let len = 0; len < length; len++) {
        if (len < 3) DP[len] = 1;
        else if (len === 3) DP[len] = 2; else DP[len] = 0;
    }

    for (let len = 4; len < length; len++) {
        DP[len] = DP[len - 1] + DP[len - 4];
    }

    console.log(DP);
    return DP[length - 1];
}

console.log(getNumberOfWays(8));
