function nonDivisibleSubset(k, s) {
    if (s.length == 1) {
        return 1;
    } else {
        let isBreakable = false;
        let i, j;
        for (i = 0; i < s.length - 1; i++) {
            for (j = i + 1; j < s.length; j++) {
                if ((s[i] + s[j]) % k == 0) {
                    isBreakable = true;
                }
                if (isBreakable) {
                    break;
                }
            }
            if (isBreakable) {
                break;
            }
        }
        if (!isBreakable) {
            return s.length;
        } else {
            const setA = [], setB = [];
            s.forEach(item => {
                setA.push(item);
                setB.push(item);
                if (s[i] == item) {
                    setA.pop();
                }
                if (s[j] == item) {
                    setB.pop();
                }
            });
            return Math.max(nonDivisibleSubset(k, setA), nonDivisibleSubset(k, setB));
        }
    }
}

console.log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));
