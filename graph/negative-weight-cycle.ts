const MAX = 9999999999999;

function bellmanFordAlgorithm(edges: Edges[]): number[] {
    const vertices = getVertices(edges);
    const numberOfVertices = vertices.length;
    const dest = getInitialDistance(numberOfVertices);
    for (let index = 0; index < numberOfVertices - 1; index++) {
        edges.forEach(edge => {
            dest[edge.end] = (dest[edge.end] > dest[edge.start] + edge.cost) ? (dest[edge.start] + edge.cost) : dest[edge.end];
        });
    }
    return dest;
}

class Edges {
    public start: number;
    public end: number;
    public cost: number;

    constructor(start: number, end: number, cost: number) {
        this.start = start;
        this.end = end;
        this.cost = cost;
    }
}

function getVertices(edges: Edges[]): number[] {
    const vertices = [];
    edges.forEach(edge => {
        if (vertices.every(vertex => vertex !== edge.start)) {
            vertices.push(edge.start);
        }
        if (vertices.every(vertex => vertex !== edge.end)) {
            vertices.push(edge.end);
        }
    });
    return vertices;
}

function getInitialDistance(length) {
    const distances = [0];
    for (let i = 1; i < length; i++) {
        distances.push(MAX);
    }
    return distances;
}

function isNegativeCycleExists(edges: Edges[]): boolean {
    const dist = bellmanFordAlgorithm(edges);
    const dest = [];
    dist.forEach(d => {
        dest.push(d);
    });
    edges.forEach(edge => {
        dest[edge.end] = (dest[edge.end] > dest[edge.start] + edge.cost) ? (dest[edge.start] + edge.cost) : dest[edge.end];
    });
    return dest.some(d => {
        const index = dest.indexOf(d);
        return dest[index] != dist[index];
    });
}


const edges = [];
edges.push(new Edges(0, 1, -5));
edges.push(new Edges(1, 2, -6));
edges.push(new Edges(2, 0, -9));
console.log(JSON.stringify(isNegativeCycleExists(edges)));