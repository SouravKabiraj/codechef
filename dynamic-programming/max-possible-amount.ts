function getMaxPossibleAmount(num: number[], i: number, j: number): { count1: number, count2: number } {
    if (i === j) {
        const result = {count1: 0, count2: num[i]};
        console.log(`${i} ${j} -> ${result.count1} ${result.count2}`);
        return result
    } else {
        if ((j - i) % 2 !== 0) {
            // player 1
            const way1 = getMaxPossibleAmount(num, i + 1, j);
            const way2 = getMaxPossibleAmount(num, i, j - 1);
            way1.count1 = way1.count1 + num[i];
            way2.count1 = way2.count1 + num[j];
            const result = way1.count1 > way2.count1 ? way1 : way2;
            console.log(`${i} ${j} -> ${result.count1} ${result.count2}`);
            return result;
        } else {
            // player 2
            const way1 = getMaxPossibleAmount(num, i + 1, j);
            const way2 = getMaxPossibleAmount(num, i, j - 1);
            way1.count2 = way1.count2 + num[i];
            way2.count2 = way2.count2 + num[j];
            const result = way1.count2 > way2.count2 ? way1 : way2;
            console.log(`${i} ${j} -> ${result.count1} ${result.count2}`);
            return result;
        }
    }
}

function getMaxPossibleAmountDP(num: number[]): number {
    const DP: number[][] = [];
    for (let i = 0; i < num.length; ++i) {
        DP.push([]);
        for (let j = 0; j < num.length; ++j) {
            DP[i].push(0);
        }
    }
    for (let gap = 0; gap < num.length; ++gap) {
        for (let i = 0, j = gap; j < num.length; ++i, ++j) {
            const x = ((i + 2) <= j) ? DP[i + 2][j] : 0;
            const y = ((i + 1) <= (j - 1)) ? DP[i + 1][j - 1] : 0;
            const z = (i <= (j - 2)) ? DP[i][j - 2] : 0;

            DP[i][j] = Math.max(num[i] + Math.min(x, y), num[j] + Math.min(y, z));
        }
    }
    console.log(DP);
    return DP[0][num.length - 1];
}


console.log(getMaxPossibleAmountDP([8, 15, 3, 7]));
