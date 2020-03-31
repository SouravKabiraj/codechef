function countPalindromeSubStringsOfAString(text: string): number {
    const DP: number[][] = [];
    for (let i = 0; i < text.length; i++) {
        DP.push([]);
        for (let j = 0; j < text.length; j++) {
            if (i === j) DP[i][j] = 1;
            else if (j === i + 1 && text[i] === text[j]) DP[i][j] = 1;
            else DP[i][j] = 0;
        }
    }

    for (let len = 3; len <= text.length; len++) {
        for (let i = 0; i < text.length - len + 1; i++) {
            const j = i + len - 1;
            if (DP[i + 1][j - 1] && text[i] === text[j]) {
                DP[i][j] = 1;
            }
        }
    }
    console.log(DP);
    return DP[0][text.length - 1];
}

countPalindromeSubStringsOfAString('abbaeae');
