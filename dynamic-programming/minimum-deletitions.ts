function getMinDeletion(text: string): number {
    const DP: number[][] = [];
    for (let i = 0; i < text.length; i++) {
        DP.push([]);
        for (let j = 0; j < text.length; j++) {
            if (i === j) {
                DP[i].push(1);
            } else {
                DP[i].push(0);
            }
        }
    }

    for (let len = 2; len <= text.length; len++) {
        for (let idx = 0; idx < text.length - len + 1; idx++) {
            const end = idx + len - 1;
            if (idx === end - 1 && text[idx] === text[end]) {
                DP[idx][end] = 2;
            } else if (text[idx] === text[end]) {
                DP[idx][end] = 2 + DP[idx + 1][end - 1];
            } else {
                DP[idx][end] = Math.max(DP[idx + 1][end], DP[idx][end - 1]);
            }
        }
    }
    console.log(DP);
    return text.length - DP[0][text.length - 1];
}

console.log(getMinDeletion('GEEKSFORGEEKS'));
