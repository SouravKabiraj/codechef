function isPathExists(graph: boolean[][], node: number, yetToVisit: number[]): boolean {
    if (!yetToVisit.length) {
        return true;
    }
    for (let i = 0; i < yetToVisit.length; i++) {
        let next = yetToVisit[i];
        if (graph[node][next]) {
            let newYetToVisit = [...yetToVisit];
            newYetToVisit.splice(i, 1);
            if (isPathExists(graph, next, newYetToVisit)) {
                return true;
            }
        }
    }
    return false;
}

function isHamiltonianPath(graph: boolean[][]) {
    const yetToVisit = [];
    for (let i = 0; i < graph.length; i++) {
        yetToVisit.push(i);
    }
    let flag = false;
    for (let i = 0; i < graph.length; i++) {
        let newYetToVisit = [...yetToVisit];
        newYetToVisit.splice(i, 1);
        if (isPathExists(graph, i, newYetToVisit)) {
            flag = true;
            break;
        }
    }
    return flag;
}

const graph = [
    [false, true, true, false],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, true, false],
];
console.log(isHamiltonianPath(graph));
