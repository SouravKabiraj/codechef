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

function getEdgesInSortedOrder(graph: number[][]): Edge[] {
    let edgeList: Edge[] = [];
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            if (i !== j) {
                edgeList.push(new Edge(i, j, graph[i][j]));
            }
        }
    }
    return edgeList.sort((edge1, edge2) => edge1.cost - edge2.cost);
}

function kruskalAlgo(graph: number[][]): number [][] {
    const result = [];
    const sortedEdges = getEdgesInSortedOrder(graph);
    const visited = [];
    let count = -1;
    graph.forEach(row => {
        count++;
        visited[count] = false;
    });
    for (let i = 0; count; i++) {
        const edge = sortedEdges[i];
        if (!visited[edge.start] || !visited[edge.end]) {
            visited[edge.start] = true;
            visited[edge.end] = true;
            if (!result[edge.start]) {
                result[edge.start] = [];
            }
            result[edge.start][edge.end] = edge.cost;
            count--;
        }
    }
    return result;
}

const MAX = 999999999999999999;

const graph = [
    [MAX, 2, MAX, 6, MAX],
    [2, MAX, 3, 8, 5],
    [MAX, 3, MAX, MAX, 7],
    [6, 8, MAX, MAX, 9],
    [MAX, 5, 7, 9, MAX],
];
console.log(JSON.stringify(kruskalAlgo(graph)));