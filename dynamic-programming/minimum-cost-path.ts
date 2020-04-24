const DP = [];

function setUp(n: number, m: number) {
    for (let i = 0; i < n; i++) {
        DP.push([]);
        for (let j = 0; j < n; j++) {
            DP[i][j] = -1;
        }
    }
}


function getMinCostPath(starti: number, startj: number, mat: number[][], distance: number): void {
    if (starti < mat.length && startj < mat[0].length && starti >= 0 && startj >= 0) {
        DP[starti][startj] = distance + mat[starti][startj];
        const minDisCells = getMinDisCell(starti, startj, mat);
        minDisCells.forEach(cell => {
            if (DP[cell.i][cell.j] == -1 || DP[cell.i][cell.j] > DP[starti][startj] + Mat[cell.i][cell.j]) {
                getMinCostPath(cell.i, cell.j, mat, DP[starti][startj]);
            }
        })
    }
}

function getMinDisCell(starti: number, startj: number, mat: number[][]): { i: number, j: number }[] {
    const list = [{i: starti - 1, j: startj}, {i: starti, j: startj - 1}, {i: starti, j: startj + 1}, {
        i: starti + 1,
        j: startj
    }];
    if (starti == 0) {
        list.forEach(ele => {
            if (ele.i === starti - 1) {
                list.splice(list.indexOf(ele), 1);
            }
        })
    }
    if (startj == 0) {
        list.forEach(ele => {
            if (ele.j === startj - 1) {
                list.splice(list.indexOf(ele), 1);
            }
        })
    }
    if (starti == mat.length - 1) {
        list.forEach(ele => {
            if (ele.i === starti + 1) {
                list.splice(list.indexOf(ele), 1);
            }
        })
    }
    if (startj == mat[0].length - 1) {
        list.forEach(ele => {
            if (ele.j === startj + 1) {
                list.splice(list.indexOf(ele), 1);
            }
        })
    }

    list.sort(listSort);
    console.log(list);
    return list;
}

function listSort(cell1, cell2) {
    if (Mat[cell1.i][cell1.j] > Mat[cell2.i][cell2.j]) {
        return 1;
    } else {
        return -1;
    }
}

function max(...arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp
}


const Mat = [
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
];

setUp(5, 5);
getMinCostPath(0, 0, Mat, 0);

console.log(DP);
