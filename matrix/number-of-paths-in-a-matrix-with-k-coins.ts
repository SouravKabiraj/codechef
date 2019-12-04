function getNumberOfPath(matrix: number[][], startx: number, starty: number, collectCoin: number): number {
    if (startx > matrix.length - 1 || starty > matrix[0].length - 1) {
        return 0;
    }
    if ((startx === matrix.length - 1) && (starty === matrix[0].length - 1)) {
        if (matrix[matrix.length - 1][matrix[0].length - 1] === collectCoin) {
            return 1;
        } else {
            return 0;
        }
    } else {
        const remainCoin = collectCoin - matrix[startx][starty];
        const directionPoint1 = getNumberOfPath(matrix, startx + 1, starty, remainCoin);
        const directionPoint2 = getNumberOfPath(matrix, startx, starty + 1, remainCoin);
        return directionPoint1 + directionPoint2;
    }
}

const matrix = [
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 2, 2],
];
console.log(getNumberOfPath(matrix, 0, 0, 10));