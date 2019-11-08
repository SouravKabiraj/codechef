function union(v1: number, v2: number, parents: number[]): number[] {
    const setA = find(v1, parents);
    const setB = find(v2, parents);
    parents[setA] = setB;
    return parents;
}

function find(u: number, parents: number[]): number {
    if (parents[u] === -1) {
        return u;
    }
    return find(parents[u], parents);
}

function isCycleExists(graph: number[][]): boolean {
    let parents = [];
    for (let i = 0; i < graph.length; i++) {
        parents[i] = -1;
    }
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            if (i !== j && graph[i][j]) {
                const setA = find(i, parents);
                const setB = find(j, parents);
                if (setA === setB) {
                    return true;
                }
                parents = union(i, j, parents);
            }
        }
    }
    return false;
}

const graph = [
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0]
];
console.log(isCycleExists(graph));
