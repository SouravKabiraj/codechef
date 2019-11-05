var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Queue.prototype.add = function (element) {
        this.list.push(element);
    };
    Queue.prototype.remove = function () {
        var pop = this.list[0];
        this.list.shift();
        return pop;
    };
    Queue.prototype.isEmpty = function () {
        return !this.list.length;
    };
    return Queue;
}());
function getAllAdjVertices(element, graph) {
    var result = [];
    for (var i = 0; i < graph.length; i++) {
        if (graph[element][i]) {
            result.push(i);
        }
    }
    return result;
}
function BFS(graph) {
    var bfsList = [];
    var visit = [];
    var queue = new Queue();
    queue.add(0);
    visit.push(0);
    while (!queue.isEmpty()) {
        var popedElement = queue.remove();
        bfsList.push(popedElement);
        var allAdjVertices = getAllAdjVertices(popedElement, graph);
        allAdjVertices.forEach(function (ele) {
            if (!visit.some(function (i) { return i === ele; })) {
                queue.add(ele);
                visit.push(ele);
            }
        });
    }
    return bfsList;
}
function DFS(graph) {
    var dfsList = [];
    var visit = [];
    var stack = [];
    visit.push(0);
    stack.push(0);
    while (stack.length) {
        var poppedItem = stack.pop();
        dfsList.push(poppedItem);
        var adjNodes = getAllAdjVertices(poppedItem, graph);
        adjNodes.forEach(function (node) {
            if (!visit.some(function (v) { return v === node; })) {
                stack.push(node);
                visit.push(node);
            }
        });
    }
    return dfsList;
}
var graph = [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
];
console.log(DFS(graph));
