function getShortestCommonSupersequence(text1: string, text2: string) {
    const dp = [];
    for (let i = 0; i < text2.length; i++) {
        dp.push([]);
    }
    for (let i = 0; i < text1.length; i++) {
        if (i == 0) {
            dp[0][i] = text1[i] == text2[0] ? 1 : 2;
        } else {
            dp[0][i] = text1[i] == text2[0] ? (dp[0][i - 1]) : (dp[0][i - 1] + 1);
        }
    }
    for (let j = 0; j < text2.length; j++) {
        if (j == 0) {
            dp[j][0] = text1[0] == text2[j] ? 1 : 2;
        } else {
            dp[j][0] = text1[0] == text2[j] ? (dp[j - 1][0]) : (dp[j - 1][0] + 1);
        }
    }
    for (let j = 1; j < text1.length; j++) {
        for (let i = 1; i < text2.length; i++) {
            const isSameChar = text1[j] == text2[i];
            const number = Math.min(dp[i][j - 1], dp[i - 1][j]);
            dp[i][j] = isSameChar ? number : number + 1;
        }
    }
    console.log(dp[text2.length - 1][text1.length - 1]);
}

getShortestCommonSupersequence('abcd', 'xadyc');
