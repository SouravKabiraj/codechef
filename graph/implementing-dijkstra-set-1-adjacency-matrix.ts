function dijkstraShortestPath(graph: number[][]): number[] {
    const dest = [];
    const prev = [];
    const queue = new Queue();
    for (let u = 0; u < graph.length; u++) {
        dest[u] = 99999999;
        prev[u] = -1;
    }

    dest[0] = 0;
    prev[0] = -1;

    for (let u = 0; u < graph.length; u++) {
        queue.add(u);
    }

    while (queue.getSize()) {
        const u = Math.min(...queue.getList());
        queue.remove(u);
        for (let index = 0; index < graph.length; index++) {
            if (graph[u][index] + dest[u] < dest[index]) {
                dest[index] = dest[u] + graph[u][index];
                prev[index] = u;
            }
        }
    }
    return dest;
}

class Queue {
    private list = [];
    private size = 0;

    public add(element: number): void {
        this.list[this.size] = element;
        this.size++;
    }

    public remove(element: number): number {
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] === element) {
                this.list.splice(i, 1);
                this.size--;
                return element;
            }
        }
        return null;
    }

    public getSize(): number {
        return this.size;
    }

    public getList(): number[] {
        return this.list;
    }
}


const max = 999999999;
const array = [
    [0, 100, 1, max, max, max],
    [100, 0, 2, 5, max, max],
    [1, 2, 0, max, 3, max],
    [max, 5, max, 0, max, 2],
    [max, max, 3, max, 0, max],
    [max, max, max, 2, max, max]
];
console.log(dijkstraShortestPath(array));