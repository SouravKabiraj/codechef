function getMinimumSquares(num: number): number {
    console.log(num);
    if (isPerfectSquare(num)) {
        return 1;
    } else {
        let min = 999999999999;
        for (let i = 1; i < num; i++) {
            const partOne = getMinimumSquares(i);
            const partTwo = getMinimumSquares(num - i);
            if (min > partOne + partTwo) {
                min = partOne + partTwo;
            }
        }
        return min;
    }
}

function getMinimumSquaresDP(num: number): number {
    const DP = [];
    for (let i = 0; i <= num; i++) {
        DP[i] = 99999999999;
        if (!isPerfectSquare(i)) {
            for (let j = 1; j < i; j++) {
                if (DP[i] > DP[j] + DP[i - j]) {
                    DP[i] = DP[j] + DP[i - j];
                }
            }
        } else {
            DP[i] = 1;
        }
    }
    return DP[num];
}

function isPerfectSquare(num: number): boolean {
    return Math.floor(Math.sqrt(num)) * Math.floor(Math.sqrt(num)) === num;
}

console.log(getMinimumSquaresDP(99));
