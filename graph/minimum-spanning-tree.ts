class Edge {
    public start: number;
    public end: number;
    public cost: number;

    constructor(start: number, end: number, cost: number) {
        this.start = start;
        this.end = end;
        this.cost = cost;
    }
}

function getAllEdgesInSortedOrder(graph: number[][]): Edge[] {
    let edges = [];
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            i !== j && graph[i][j] && edges.push(new Edge(i, j, graph[i][j]));
        }
    }
    return edges.sort((a: Edge, b: Edge) => a.cost - b.cost);
}

function getMinimulSpanningTree(graph: number[][]): number[][] {
    const spanningEdges = [];
    let visit = [];
    for (let i = 0; i < graph.length; i++) {
        visit[i] = false;
    }
    const sortedEdges = getAllEdgesInSortedOrder(graph);
    sortedEdges.forEach(edge => {
        if (!visit[edge.end]) {
            spanningEdges.push(edge);
            visit[edge.start] = true;
            visit[edge.end] = true;
        }
    })
    return spanningEdges;
}

const graph = [
    [0, 1000, 2, 3],
    [100, 0, 0, 0],
    [200, 0, 0, 0],
    [300, 0, 0, 0],
];
console.log(getMinimulSpanningTree(graph));
