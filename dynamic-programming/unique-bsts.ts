function getNumberOfUniqueBst(nodeCount: number): number {
    if (DPTable[nodeCount]) {
        return DPTable[nodeCount];
    } else {
        let count = 0;
        for (let i = 1; i <= nodeCount; i++) {
            count = count + getNumberOfUniqueBst(i - 1) * getNumberOfUniqueBst(nodeCount - i);
        }
        DPTable[nodeCount] = count;
        return count;
    }
}

const DPTable = [1, 1];

console.log(getNumberOfUniqueBst(2));
