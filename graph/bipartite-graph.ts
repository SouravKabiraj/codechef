function getAllAdjVertex(v: number, graph: number[][]): number[] {
    const vertices = [];
    for (let i = 0; i < graph.length; i++) {
        v != i && graph[v][i] && vertices.push(i);
    }
    return vertices;
}

function isBipartiteGraph(graph: number[][], u: number, visit: boolean[], currentSet: number, set: number[][]): boolean {
    let temp = true;
    const adjVertex = getAllAdjVertex(u, graph);
    adjVertex.forEach(v => {
        if (visit[v]) {
            if (set[currentSet].some(setElement => setElement === v)) {
                temp = false;
            }
        } else {
            visit[v] = true;
            currentSet ? set[0].push(v) : set[1].push(v);
            if (!isBipartiteGraph(graph, v, visit, (currentSet ? 0 : 1), set)) {
                temp = false;
            }
        }
    });
    return temp;
}

function main() {
    const graph = [
        [0, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
    ];
    const visit = [];
    const set = [];
    set[0] = [];
    set[1] = [];
    const currentSet = 0;
    for (let i = 0; i < graph.length; i++) {
        visit[i] = false;
    }
    visit[0] = true;
    set[0].push(0);
    return isBipartiteGraph(graph, 0, visit, currentSet, set);
}

console.log(main());