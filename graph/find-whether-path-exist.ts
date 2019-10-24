function findEndPoint(input: number[][], point: Point): boolean {
    if (point.i >= input.length || point.i < 0 || point.j >= input[point.i].length || point.j < 0) {
        return false;
    } else if (input[point.i][point.j] === 0) {
        return false;
    } else if (input[point.i][point.j] === 2) {
        return true;
    } else {
        input[point.i][point.j] = 0;
        const pathResult1 = findEndPoint(input, new Point(point.i + 1, point.j));
        const pathResult2 = findEndPoint(input, new Point(point.i, point.j + 1));
        const pathResult3 = findEndPoint(input, new Point(point.i - 1, point.j));
        const pathResult4 = findEndPoint(input, new Point(point.i, point.j - 1));
        return pathResult1 || pathResult2 || pathResult3 || pathResult4;
    }
}

function isPathExist(input: number[][]): boolean {
    const start = findStartIndex(input);
    return findEndPoint(input, start);
}

class Point {
    public i: number;
    public j: number;

    constructor(i: number, j: number) {
        this.i = i;
        this.j = j;
    }
}

function findStartIndex(input: number[][]): Point {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 1) {
                return new Point(i, j);
            }
        }
    }
}

const inputMat = [
    [3, 3, 1, 3, 0, 3, 3, 3],
    [3, 3, 3, 3, 0, 3, 3, 3],
    [3, 0, 0, 0, 0, 2, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3],
];
console.log(isPathExist(inputMat));