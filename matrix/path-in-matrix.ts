const MIN = -9999999999;

function getLargestPath(mat: number[][], dist: number[][], x: number, y: number): number {
    if (x === mat.length || x === -1 || y === -1 || y === mat.length) {
        return MIN;
    }
    if (dist[x][y] === -1) {
        if (x === mat.length - 1) {
            dist[x][y] = mat[x][y];
        } else {
            const top = getLargestPath(mat, dist, x + 1, y);
            const right = getLargestPath(mat, dist, x + 1, y + 1);
            const left = getLargestPath(mat, dist, x + 1, y - 1);
            const max = Math.max(top, left, right);
            dist[x][y] = max + mat[x][y];
        }
    }
    return dist[x][y];

}

const mat = [
    [1, 4, 7, 3, 90],
    [90, 1, 1, 90, 0],
    [40, 1, 90, 1, 0],
    [40, 90, 1, 20, 0],
    [40, 90, 1, 20, 0]
];
const dist = [
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1]
];
let max = MIN;
for (let i = 0; i < mat[0].length; i++) {
    const largestPath = getLargestPath(mat, dist, 0, i);
    max = max < largestPath ? largestPath : max;
}
console.log(dist);