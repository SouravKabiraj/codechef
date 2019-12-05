function numberOfPalindromicPathsInAMatrix(graph: string[][]): number {
    const paths = getAllPaths(graph, 0, 0, '');
    let count = 0;
    paths.forEach(path => {
        // console.log(path)
        isPalindrom(path) && count++;
    })
    return count;
}

function isPalindrom(str: string): boolean {
    let flag = true;
    for (let i = 0; i <= (str.length - 1) / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            flag = false;
        }
    }
    console.log(`${str} --> ${flag}`);
    return flag;
}

function getAllPaths(graph: string[][], i: number, j: number, currentPath: string): string[] {
    if (i === graph.length - 1 && j === graph[i].length - 1) {
        return [currentPath + graph[i][j]];
    } else {
        const newPaths = [];
        if (i + 1 < graph.length) {
            newPaths.push(...getAllPaths(graph, i + 1, j, currentPath + graph[i][j]));
        }
        if (j + 1 < graph[i].length) {
            newPaths.push(...getAllPaths(graph, i, j + 1, currentPath + graph[i][j]));
        }
        return newPaths;
    }
}

const graph = [
    ['a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a'],
    ['a', 'b', 'b', 'a']
];
console.log(numberOfPalindromicPathsInAMatrix(graph));
