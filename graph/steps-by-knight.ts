const MAX = 9999999999999999999999;

class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Queue {
    public list: Position[] = [];
    public front: number = -1;
    public rear: number = -1;

    public add(element: Position): void {
        this.list.push(element);
        this.front++;
        if (this.rear === -1) {
            this.rear++;
        }
    }

    public remove(): Position {
        const element = this.list[0];
        this.list.splice(0, 1);
        this.front--;
        if (this.rear) {
            this.rear--;
        }
        return element;
    }
}

function BFS(knight: Position, target: Position, boardSize: number): number[][] {
    const visit: boolean[][] = [];
    const dist: number[][] = [];
    const queue = new Queue();

    for (let i = 0; i < boardSize; i++) {
        visit[i] = [];
        dist[i] = [];
        for (let j = 0; j < boardSize; j++) {
            visit[i][j] = false;
            dist[i][j] = MAX;
        }
    }
    visit[knight.x][knight.y] = true;
    dist[knight.x][knight.y] = 0;

    queue.add(new Position(knight.x, knight.y));

    while (queue.front !== -1) {
        const removedElement = queue.remove();
        if (removedElement.x === target.x && removedElement.y === target.y) {
            return dist;
        }
        getKnightSteps(removedElement).forEach(step => {
            if (isInSideBoard(step, boardSize) && !visit[step.x][step.y] && dist[step.x][step.y] > (dist[removedElement.x][removedElement.y] + 1)) {
                visit[step.x][step.y] = true;
                queue.add(step);
                dist[step.x][step.y] = (dist[removedElement.x][removedElement.y] + 1)
            }
        });
    }
    return dist;
}

function getKnightSteps(position: Position): Position[] {
    const steps = [
        new Position(position.x + 2, position.y + 1),
        new Position(position.x + 2, position.y - 1),
        new Position(position.x - 2, position.y + 1),
        new Position(position.x - 2, position.y - 1),
        new Position(position.x + 1, position.y + 2),
        new Position(position.x + 1, position.y - 2),
        new Position(position.x - 1, position.y + 2),
        new Position(position.x - 1, position.y - 2),
    ];
    return steps;
}

function isInSideBoard(position: Position, boardSize: number): boolean {
    return !(position.x < 0 || position.y < 0 || boardSize <= position.x || boardSize <= position.y);
}

console.log(BFS(new Position(4, 6), new Position(14, 19), 20)[14][19]);