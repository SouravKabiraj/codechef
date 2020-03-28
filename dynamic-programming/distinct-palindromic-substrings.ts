function getDistinctPalindromicSubStringsCount(text: string): number {
    const DP: number[][] = [];
    const map = {};
    for (let i = 0; i < text.length; i++) {
        DP.push([]);
        for (let j = 0; j < text.length; j++) {
            map[text.charAt(i)] = 1;
            i === j ? DP[i].push(1) : DP[i].push(0);
        }
    }

    for (let i = 0; i < text.length - 1; i++) {
        DP[i][i + 1] = text[i] === text[i + 1] ? 1 : 0;
        if (text[i] === text[i + 1]) {
            map[text.charAt(i) + text.charAt(i + 1)] = 1;
        }
    }

    for (let len = 3; len < text.length; len++) {
        for (let start = 0; start < text.length - len + 1; start++) {
            const end = start + len - 1;
            DP[start][end] = DP[start + 1][end - 1] && text[start] === text[end] ? 1 : 0;
            if (DP[start + 1][end - 1] && text[start] === text[end]) {
                const strCopy = text;
                map[strCopy.substr(start, len)] = 1;
            }
        }
    }
    return Object.keys(map).length;
}


console.log(getDistinctPalindromicSubStringsCount('abaaa'));
