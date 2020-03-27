// function getLongestRepeatingSubsequence(text: string, substring: string, firstIndex: number, secondIndex: number): string {
//     if (firstIndex === text.length || secondIndex === text.length) {
//         return substring;
//     } else if (firstIndex != secondIndex && text.charAt(firstIndex) === text.charAt(secondIndex)) {
//         return getLongestRepeatingSubsequence(text, substring + text.charAt(firstIndex), firstIndex + 1, secondIndex + 1);
//     } else {
//         const longestRepeatingSubsequence1 = getLongestRepeatingSubsequence(text, substring, firstIndex, secondIndex + 1);
//         const longestRepeatingSubsequence2 = getLongestRepeatingSubsequence(text, substring, firstIndex + 1, secondIndex);
//         return longestRepeatingSubsequence1.length > longestRepeatingSubsequence2.length ? longestRepeatingSubsequence1 : longestRepeatingSubsequence2;
//     }
// }


function getLongestRepeatingSubsequence(text: string): number {
    const DP = [];
    for (let i = 0; i < text.length; i++) {
        DP.push([]);
        for (let j = 0; j < text.length; j++) {
            DP[i].push(0);
        }
    }
    for (let i = 1; i < text.length; i++) {
        for (let j = 1; j < text.length; j++) {
            if (text.charAt(i) === text.charAt(j) && i !== j) {
                DP[i][j] = DP[i - 1][j - 1] + 1;
            } else {
                DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
            }
        }
    }
    console.log(DP);
    return DP[text.length - 1][text.length - 1];
}

// console.log(getLongestRepeatingSubsequence('abxoxoxodxoxo', '', 0, 0));
console.log(getLongestRepeatingSubsequence('abxoxox'));
