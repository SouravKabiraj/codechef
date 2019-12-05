function isBinSearchTree(preOrder: number[]): boolean {
    if (!preOrder.length) {
        return true;
    }
    const root = preOrder[0];
    let change = 0;
    let index = 1;
    for (let i = 1; i < preOrder.length; i++) {
        if (!(change % 2)) {
            if (preOrder[i] > root) {
                change++;
                index = i;
            }
        } else {
            if (preOrder[i] < root) {
                change++;
                index = i;
            }
        }
    }
    if (change > 1) {
        return false;
    } else {
        const preOrderLeft = preOrder.slice(1, index);
        const preOrderRight = preOrder.slice(index);
        console.log(preOrderLeft);
        console.log(preOrderRight);
        const leftTreeResult = isBinSearchTree(preOrderLeft);
        const rightTreeResult = isBinSearchTree(preOrderRight);
        return leftTreeResult && rightTreeResult;
    }
}


console.log(isBinSearchTree([10, 1, -1, 5, 20, 15, 30, 11]));
