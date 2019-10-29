function floydWarshall(graph: number[][]): number[][] {
    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                graph[i][j] = graph[i][k] + graph[k][j] < graph[i][j] ? graph[i][k] + graph[k][j] : graph[i][j];
            }
        }
    }
    return graph;
}

const INF = 9999999999;
const graph = [
    [0, 1, 43],
    [1, 0, 6],
    [INF, INF, 0]
];
console.log(JSON.stringify(floydWarshall(graph)));