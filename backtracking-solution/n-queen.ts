class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function nQueen(board: number[][]): boolean {
    const newBoard = placeIthQueen(board, 0);
    return newBoard;
}

function placeIthQueen(board: number[][], col: number): boolean {
    if (col >= board.length) {
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        if (isSafe(new Position(col, i), board)) {
            board[col][i] = 1;
            if (col + 1 === board.length) {
                console.log(board);
                return true;
            }
            if (placeIthQueen(board, col + 1)) {
                return true;
            }
            board[col][i] = 0;
        }
    }
    return false;
}


function isSafe(position: Position, board: number[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        if (board[i][position.y] === 1) {
            return false;
        }
        if (board[position.x][i] === 1) {
            return false;
        }
        if ((position.x + i < board.length) && position.y + i < board.length && board[position.x + i][position.y + i]) {
            return false;
        }
        if ((position.x + i < board.length) && position.y - i > -1 && board[position.x + i][position.y - i]) {
            return false;
        }
        if ((position.x - i > -1) && position.y + i < board.length && board[position.x - i][position.y + i]) {
            return false;
        }
        if ((position.x - i > -1) && position.y - i > -1 && board[position.x - i][position.y - i]) {
            return false;
        }
    }
    return true;
}


console.log(nQueen([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]));
