function getKThSmallestElement(mat: number[][], k: number): number {
    let result;
    const pointer = [];
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
        pointer.push(0);
    }

    while (counter !== k) {
        const items = [];
        for (let i = 0; i < mat.length; i++) {
            items.push(mat[i][pointer[i]]);
        }
        result = Math.min(...items);
        counter++;
        for (let i = 0; i < mat.length; i++) {
            if (result === mat[i][pointer[i]]) {
                pointer[i] = pointer[i] + 1;
            }
        }
    }
    return result;
}

const mat = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [24, 29, 37, 48],
    [32, 33, 39, 50]
];
console.log(getKThSmallestElement(mat, 7));