class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const MAX = 99999999999999999999999;

function getMinKeyPositionFromNonVisitedList(cost: number[][], queue: Position[]): Position {
    return;
}

function remove(position: Position, queue: Position[]): Position[] {
    let i = -1;
    queue.forEach(element => {
        if (element.x === position.x && element.y === position.y) {
            i = queue.indexOf(element);
        }
    });
    return queue.splice(i, 1);
}

function getSteps(position: Position, board: number[][]): Position[] {
    const steps = [];
    (position.x + 1 > -1 && position.x + 1 < board.length) && (position.y + 1 > -1 && position.y + 1 < board[position.x + 1].length) && steps.push(new Position(position.x + 1, position.y + 2));
    (position.x + 1 > -1 && position.x + 1 < board.length) && (position.y - 2 > -1 && position.y - 2 < board[position.x + 1].length) && steps.push(new Position(position.x + 1, position.y - 2));
    (position.x - 1 > -1 && position.x - 1 < board.length) && (position.y + 2 > -1 && position.y + 2 < board[position.x - 1].length) && steps.push(new Position(position.x - 1, position.y + 2));
    (position.x - 1 > -1 && position.x - 1 < board.length) && (position.y - 2 > -1 && position.y - 2 < board[position.x - 1].length) && steps.push(new Position(position.x - 1, position.y - 2));
    (position.x + 2 > -1 && position.x + 2 < board.length) && (position.y + 1 > -1 && position.y + 1 < board[position.x + 2].length) && steps.push(new Position(position.x + 2, position.y + 1));
    (position.x + 2 > -1 && position.x + 2 < board.length) && (position.y - 1 > -1 && position.y - 1 < board[position.x + 2].length) && steps.push(new Position(position.x + 2, position.y - 1));
    (position.x - 2 > -1 && position.x - 2 < board.length) && (position.y + 1 > -1 && position.y + 1 < board[position.x - 2].length) && steps.push(new Position(position.x - 2, position.y + 1));
    (position.x - 2 > -1 && position.x - 2 < board.length) && (position.y - 1 > -1 && position.y - 1 < board[position.x - 2].length) && steps.push(new Position(position.x - 2, position.y - 1));
    return steps;
}

function findSortestPath(graph: number[][], start: Position, target: Position): { parents: Position[][], key: number[][] } {
    const key: number[][] = [];
    const parents: Position[][] = [];
    let queue = [];
    for (let i = 0; i < graph.length; i++) {
        key[i] = [];
        parents[i] = [];
        for (let j = 0; j < graph[i].length; j++) {
            key[i][j] = MAX;
            parents[i][j] = null;
            queue.push(new Position(i, j));
        }
    }

    while (queue.length != 0) {
        const minPosition = getMinKeyPositionFromNonVisitedList(key, queue);
        queue = remove(minPosition, queue);
        getSteps(minPosition, graph).forEach(step => {
            if (key[step.x][step.y] > key[minPosition.x][minPosition.y] + 1) {
                key[step.x][step.y] = key[minPosition.x][minPosition.y] + 1;
                parents[step.x][step.y] = minPosition;
            }
        });
    }

    return {parents, key};
}