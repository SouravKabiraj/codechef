function heapSort(arr: number[], N: number) {
    for (let i = Math.floor(N / 2 - 1); i >= 0; i--) {
        arr = hepify(arr, i, N);
    }

    for (let i = N - 1; i >= 0; i--) {
        const X = arr[0];
        arr[0] = arr[i];
        arr[i] = X;
        hepify(arr, 0, i);

    }
    console.log(arr);
}

function hepify(arr: number[], i: number, N: number) {
    let left = i * 2 + 1 >= N ? i : i * 2 + 1;
    let right = i * 2 + 2 >= N ? i : i * 2 + 2;
    let temp;
    if (arr[left] > arr[right]) {
        temp = left;
    } else {
        temp = right;
    }
    if (arr[temp] > arr[i]) {
        const X = arr[temp];
        arr[temp] = arr[i];
        arr[i] = X;
        hepify(arr, temp, N);
    }
    return arr;
}


heapSort([1, 5, 2, 0, 20], 5);
