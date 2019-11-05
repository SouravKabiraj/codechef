function getMinimumCostPath(array: number[][], position: Position, cost: number): number[][] {
    if (position.x < 0 || position.x >= array.length || position.y < 0 || position.y >= array.length) {
        return array;
    } else {
        const cost1 = getMinimumCostPath(array, new Position(position.x-1,position.y),)
        array[position.x][position.y] =  array[position.x][position.y] + Math.min()
    }
}

class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


const array = [
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
];
const MAX = 999999999999;
const dest = [];
for (let i = 0; i < array.length; i++) {
    dest[i] = [];
    for (let j = 0; j < array[i].length; j++) {
        dest[i][j] = MAX;
    }
}


console.log(JSON.stringify(getMinimumCostPath(array, new Position(4, 4), 0)));
