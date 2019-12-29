function getDistinctTransformation(str1: string, str2: string): number {
    const dpTable: number[][] = [];
    for (let i = 0; i < str1.length; i++) {
        dpTable[i] = [];
        for (let j = 0; j < str2.length; j++) {
            dpTable[i][j] = 0;
        }
    }

    for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str2.length; j++) {
            if (i === 0) {
                if (j === 0) {
                    if (str1[i] === str2[j]) {
                        dpTable[i][j] = 1;
                    } else {
                        dpTable[i][j] = 0;
                    }
                } else if (str1[i] === str2[j]) {
                    dpTable[i][j] = dpTable[i][j - 1] + 1;
                } else {
                    dpTable[i][j] = dpTable[i][j - 1];
                }
            } else {
                if (str1[i] === str2[j]) {
                    dpTable[i][j] = dpTable[i][j - 1] + dpTable[i - 1][j - 1];
                } else {
                    dpTable[i][j] = dpTable[i][j - 1];
                }
            }
        }
    }
    return dpTable[str1.length - 1][str2.length - 1];
}

console.log(getDistinctTransformation('abc', 'abbbbc'));
