class GraphPoint {
    public next: GraphPoint;
    public value: number;
    public ladder: GraphPoint;
    public snake: GraphPoint;
    public rollRequired: number;

    constructor(value: number) {
        this.next = null;
        this.value = value;
        this.ladder = null;
        this.snake = null;
        this.rollRequired = null;
    }

    public isLadderTail(): boolean {
        return !!this.ladder;
    }

    public isSnakeHead(): boolean {
        return !!this.snake;
    }
}

function getJumpCountFrom(point: GraphPoint): number {
    if (point.rollRequired) {
        return point.rollRequired;
    }
    if (point.next === null) {
        return 0;
    } else {
        const jumpPossibility = [];
        let count = 6;
        let newPointer = point.next;
        while (count && point.next.value === point.value + 1) {
            if (newPointer) {
                if (newPointer.isSnakeHead()) {
                    jumpPossibility.push(getJumpCountFrom(newPointer.snake));
                } else if (newPointer.isLadderTail()) {
                    jumpPossibility.push(getJumpCountFrom(newPointer.ladder));
                } else {
                    jumpPossibility.push(getJumpCountFrom(newPointer));
                }
                newPointer = newPointer.next;
            }
            count--;
        }
        const number = 1 + Math.min(...jumpPossibility);
        point.rollRequired = number;
        // console.log(JSON.stringify(point));
        return number;
    }
}

function getPoint(value: number, board: GraphPoint): GraphPoint {
    let point = board;
    for (let index = 1; index <= 30; index++) {
        if (value == point.value) {
            return point;
        }
        point = point.next;
    }
}

const board = new GraphPoint(1);
let point = board;
for (let index = 2; index <= 30; index++) {
    const newPoint = new GraphPoint(index);
    point.next = newPoint;
    point = newPoint;
}
getPoint(4, board).ladder = getPoint(20, board);
// getPoint(5, board).ladder = getPoint(25, board);

console.log(getJumpCountFrom(board));