class Queue {
    public list: number[] = [];

    public add(element: number): void {
        this.list.push(element);
    }

    public remove(): number {
        const pop = this.list[0];
        this.list.shift()
        return pop;
    }

    public isEmpty(): boolean {
        return !this.list.length;
    }
}

function getAllAdjVertices(element: number, graph: number[][]): number[] {
    const result = [];
    for (let i = 0; i < graph.length; i++) {
        if (graph[element][i]) {
            result.push(i);
        }
    }
    return result;
}

function BFS(graph: number[][]): number[] {
    const bfsList = [];
    const visit = [];
    const queue = new Queue();

    queue.add(0);
    visit.push(0);

    while (!queue.isEmpty()) {
        const popedElement = queue.remove();
        bfsList.push(popedElement);
        const allAdjVertices = getAllAdjVertices(popedElement, graph);
        allAdjVertices.forEach(ele => {
            if (!visit.some(i => i === ele)) {
                queue.add(ele);
                visit.push(ele);
            }
        })
    }
    return bfsList;
}

function DFS(graph: number[][]): number[] {
    const dfsList = [];
    const visit: number[] = [];
    const stack: number[] = [];

    visit.push(0);
    stack.push(0);

    while (stack.length) {
        const poppedItem = stack.pop();
        dfsList.push(poppedItem);
        const adjNodes = getAllAdjVertices(poppedItem, graph);

        adjNodes.forEach(node => {
            if (!visit.some(v => v === node)) {
                stack.push(node);
                visit.push(node);
            }
        })
    }
    return dfsList;
}

const graph = [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
];

console.log(DFS(graph));
