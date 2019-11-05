function getMinimumCostPath(array, position, cost) {
    if (position.x < 0 || position.x >= array.length || position.y < 0 || position.y >= array.length) {
        return array;
    }
    else {
        dest[position.x][position.y] = dest[position.x][position.y] > array[position.x][position.y] + cost ? array[position.x][position.y] + cost : dest[position.x][position.y];
        array = getMinimumCostPath(array, new Position(position.x - 1, position.y), array[position.x][position.y]);
        array = getMinimumCostPath(array, new Position(position.x + 1, position.y), array[position.x][position.y]);
        array = getMinimumCostPath(array, new Position(position.x, position.y + 1), array[position.x][position.y]);
        array = getMinimumCostPath(array, new Position(position.x, position.y - 1), array[position.x][position.y]);
        return array;
    }
}
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
var array = [
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
];
var MAX = 999999999999;
var dest = [];
for (var i = 0; i < array.length; i++) {
    dest[i] = [];
    for (var j = 0; j < array[i].length; j++) {
        dest[i][j] = MAX;
    }
}
console.log(JSON.stringify(getMinimumCostPath(array, new Position(4, 4), 0)));
