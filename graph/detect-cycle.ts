function union(parent: number[], i: number, j: number): number[] {
    const setI = find(parent, i);
    const setJ = find(parent, j);
    parent[setJ] = setI;
    return parent;
}


function find(parent: number[], i: number): number {
    if (parent[i] === -1) {
        return i;
    } else {
        return find(parent, parent[i]);
    }
}
