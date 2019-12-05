function dfsAlgo(graph: boolean[][], node: number, stack: number[], visit: boolean[]): number[] {
    visit[node] = true;
    for (let i = 0; i < graph.length; i++) {
        graph[node][i] && !visit[i] && dfsAlgo(graph, i, stack, visit);
    }
    stack.push(node);
    return stack;
}

function getTransposeOf(graph: boolean[][]): boolean[][] {
    for (let i = 0; i < graph.length; i++) {
        for (let j = i + 1; j < graph.length; j++) {
            const temp = graph[i][j];
            graph[i][j] = graph[j][i];
            graph[j][i] = temp;
        }
    }
    return graph;
}

function strongComponents(graph: boolean[][]): number[] {
    let visit = [];
    for (let i = 0; i < graph.length; i++) {
        visit[i] = false;
    }

    let stack = [];
    for (let i = 0; i < graph.length; i++) {
        if (!visit[i]) {
            stack = dfsAlgo(graph, i, stack, visit);
        }
    }
    for (let i = 0; i < graph.length; i++) {
        visit[i] = false;
    }
    const revGraph = getTransposeOf(graph);
    while (stack.length) {
        const popedElement = stack.pop();
        visit[popedElement] || console.log(dfsAlgo(revGraph, popedElement, [], visit));
    }
    return;
}

const graph = [
    [false, true, false, false, false],
    [false, false, true, false, false],
    [true, false, false, false, false],
    [false, false, false, true, true],
    [false, false, false, true, true],
];
strongComponents(graph);
