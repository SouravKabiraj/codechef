function getSubsequencesOfType(str: string, i: number): number {
    const currentStr = str;
    if (i === str.length) {
        if (isPatternMatched(str)) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return getSubsequencesOfType(currentStr.slice(0, i) + currentStr.slice(i + 1), i) + getSubsequencesOfType(currentStr, i + 1);
    }
}

function isPatternMatched(str: string): boolean {
    const chars = ['a', 'b', 'c'];
    if (str.indexOf(chars[0]) == -1 || str.indexOf(chars[1]) == -1 || str.indexOf(chars[2]) == -1) {
        return false;
    } else {
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] !== str[i + 1]) {
                const index = chars.indexOf(str[i]);
                if (str[i + 1] !== chars[index + 1]) {
                    return false;
                }
            }
        }
        return true;
    }
}

console.log(getSubsequencesOfType('abcabc', 0));
