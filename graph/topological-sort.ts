function topologicalSort(graph: number[][]): number[] {
    let visit = [];
    let stack = [];
    for (let i = 0; i < graph.length; i++) {
        visit[i] = false;
    }
    for (let i = 0; i < graph.length; i++) {
        const utility = topologicalSortUtility(graph, visit, stack, i);
        visit = utility.visit;
        stack = utility.stack;
    }
    return stack;
}

function topologicalSortUtility(graph: number[][], visit: boolean[], stack: number[], u: number): { stack: number[], visit: boolean[] } {
    if (!visit[u]) {
        visit[u] = true;
        for (let i = 0; i < graph.length; i++) {
            if (i != u && graph[u][i] && !visit[i]) {
                stack = topologicalSortUtility(graph, visit, stack, i).stack;
            }
        }
        stack.push(u);
    }
    return {stack, visit};
}


const graph = [
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
];
const sort = topologicalSort(graph);
while (sort.length) {
    console.log(sort.pop());
}
