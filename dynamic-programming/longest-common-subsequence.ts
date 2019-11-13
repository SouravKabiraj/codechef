function longestCommonSequence(input1: string[], input2: string[]): number[][] {
    const lcs: number[][] = [];
    for (let i = 0; i < input1.length; i++) {
        lcs[i] = [];
        for (let j = 0; j < input2.length; j++) {
            if (input1[i] === input2[j]) {
                console.log(input1[i]);
                if (i == 0 || j == 0) {
                    lcs[i][j] = 1;
                } else {
                    lcs[i][j] = lcs[i - 1][j - 1] + 1;
                }
            } else {
                if (i == 0 && j == 0) {
                    lcs[i][j] = 1;
                } else if (j == 0) {
                    lcs[i][j] = lcs[i - 1][j];
                } else if (i == 0) {
                    lcs[i][j] = lcs[i][j - 1];
                } else {
                    lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
                }
            }
        }
    }
    return lcs;
}


console.log(longestCommonSequence(['O', 'A', 'C', 'D', 'G', 'H'], ['A', 'E', 'D', 'F', 'H', 'R']));
