function getLongestPalindromicSubseq(text: string): number {
    const DP: number[][] = [];
    for (let i = 0; i < text.length; i++) {
        DP.push([]);
        for (let j = 0; j < text.length; j++) {
            if (i === j)
                DP[i][j] = 1;
            else if (j === i + 1 && text[i] === text[j])
                DP[i][j] = 2;
            else
                DP[i][j] = 1;
        }
    }

    for (let len = 3; len <= text.length; len++) {
        for (let i = 0; i <= text.length - len; i++) {
            const j = i + len - 1;
            DP[i][j] = text[i] === text[j] ? DP[i + 1][j - 1] + 2 : Math.max(DP[i + 1][j], DP[i][j - 1]);
            console.log(`${i} ${j} -> ${DP[i][j]}`);
        }
    }
    console.log(DP);
    return DP[0][text.length - 1];
}


console.log(getLongestPalindromicSubseq('bbabcbcab'));
