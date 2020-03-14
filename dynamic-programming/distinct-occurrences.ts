function getDistinctOccurrences(text: string, pattern: string): number {
    const dp = [];
    for (let i = 0; i <= text.length; i++) {
        dp.push([1]);
        for (let j = 0; j < pattern.length; j++) {
            dp[i].push(0);
        }
    }


    for (let i = 1; i <= text.length; i++) {
        for (let j = 1; j <= pattern.length; j++) {
            if (text.charAt(i - 1) == pattern.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log(dp);

    return dp[text.length - 1][pattern.length - 1];
}


getDistinctOccurrences('bananaban', 'ban');
