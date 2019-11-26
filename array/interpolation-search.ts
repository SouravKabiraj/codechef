function interpolationSearch(list: number[], start: number, end: number, search: number): number {
    if (start === end || list[start] > search || search > list[end]) {
        return list[start] === search ? start : -1;
    } else {
        let position: number = Math.floor(start + ((search - list[start]) * (end - start) / (list[end] - list[start])));
        console.log(position);
        if (list[position] === search) {
            return position
        } else if (list[position] < search) {
            return interpolationSearch(list, Math.floor(position + 1), end, search);
        } else {
            return interpolationSearch(list, start, Math.floor(position - 1), search);
        }
    }
}

const list = [1, 2, 4, 5, 6, 8, 9, 10, 15, 20];
console.log(`-----> ${interpolationSearch(list, 0, 9, 15)}`);