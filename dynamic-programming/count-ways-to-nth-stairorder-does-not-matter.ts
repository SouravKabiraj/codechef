function countWaysToNthStairorderDoesNotMatter(top: number, steps: number[]): number {
    if (top == 0) {
        if (!DP[steps.length]) {
            DP[steps.length] = 1;
            return 1;
        } else {
            return 0;
        }
    } else if (top < 0) {
        return 0;
    } else {
        const twoStepWays = countWaysToNthStairorderDoesNotMatter(top - 2, [...steps, 2]);
        const oneStepWays = countWaysToNthStairorderDoesNotMatter(top - 1, [...steps, 1]);
        return twoStepWays + oneStepWays;
    }
}

const DP = {};

console.log(countWaysToNthStairorderDoesNotMatter(4, []));
