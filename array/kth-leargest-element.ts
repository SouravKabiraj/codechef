function getKthLeargestElement(list: number[]): number[] {
    return heapSort(list);
}

function heapify(list: number[], i: number, n: number): number[] {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < n && list[left] > list[largest]) {
        largest = left;
    }

    if (right < n && list[right] > list[largest]) {
        largest = right;
    }

    if (i !== largest) {
        let temp = list[i];
        list[i] = list[largest];
        list[largest] = temp;
        heapify(list, largest, n);
    }
    return list;
}

function heapSort(list: number[]): number[] {
    for (let i = (list.length) / 2 - 1; i >= 0; i--) {
        list = heapify(list, i, list.length);
    }

    for (let i = list.length - 1; i >= 0; i--) {
        let temp = list[i];
        list[i] = list[0];
        list[0] = temp;
        list = heapify(list, 0, i);
    }
    return list;
}

console.log(getKthLeargestElement([1, 10, 3, 20, 38, 46]));