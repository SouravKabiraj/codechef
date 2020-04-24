var DP = [];
function setUp(n, m) {
    for (var i = 0; i < n; i++) {
        DP.push([]);
        for (var j = 0; j < n; j++) {
            DP[i][j] = -1;
        }
    }
}
function getMinCostPath(starti, startj, mat, distance) {
    if (starti < mat.length && startj < mat[0].length && starti >= 0 && startj >= 0) {
        DP[starti][startj] = distance + mat[starti][startj];
        var minDisCells = getMinDisCell(starti, startj, mat);
        minDisCells.forEach(function (cell) {
            if (DP[cell.i][cell.j] == -1 || DP[cell.i][cell.j] > DP[starti][startj] + Mat[cell.i][cell.j]) {
                getMinCostPath(cell.i, cell.j, mat, DP[starti][startj]);
            }
        });
    }
}
function getMinDisCell(starti, startj, mat) {
    var list = [{ i: starti - 1, j: startj }, { i: starti, j: startj - 1 }, { i: starti, j: startj + 1 }, {
            i: starti + 1,
            j: startj
        }];
    if (starti == 0) {
        list.forEach(function (ele) {
            if (ele.i === starti - 1) {
                list.splice(list.indexOf(ele), 1);
            }
        });
    }
    if (startj == 0) {
        list.forEach(function (ele) {
            if (ele.j === startj - 1) {
                list.splice(list.indexOf(ele), 1);
            }
        });
    }
    if (starti == mat.length - 1) {
        list.forEach(function (ele) {
            if (ele.i === starti + 1) {
                list.splice(list.indexOf(ele), 1);
            }
        });
    }
    if (startj == mat[0].length - 1) {
        list.forEach(function (ele) {
            if (ele.j === startj + 1) {
                list.splice(list.indexOf(ele), 1);
            }
        });
    }
    list.sort(listSort);
    console.log(list);
    return list;
}
function listSort(cell1, cell2) {
    if (Mat[cell1.i][cell1.j] > Mat[cell2.i][cell2.j]) {
        return 1;
    }
    else {
        return -1;
    }
}
function max() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}
var Mat = [
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
];
setUp(5, 5);
getMinCostPath(0, 0, Mat, 0);
console.log(DP);
