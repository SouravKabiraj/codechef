function heapSort(arr, N) {
    for (var i = parseInt(N / 2 - 1); i >= 0; i--) {
        arr = hepify(arr, i, N);
    }
    for (var i = N - 1; i >= 0; i--) {
        var X = arr[0];
        arr[0] = arr[i];
        arr[i] = X;
        hepify(arr, 0, i);
    }
    console.log(arr);
}
function hepify(arr, i, N) {
    var left = i * 2 + 1 >= N ? i : i * 2 + 1;
    var right = i * 2 + 2 >= N ? i : i * 2 + 2;
    var temp;
    if (arr[left] > arr[right]) {
        temp = left;
    }
    else {
        temp = right;
    }
    if (arr[temp] > arr[i]) {
        var X = arr[temp];
        arr[temp] = arr[i];
        arr[i] = X;
        hepify(arr, temp, N);
    }
    return arr;
}
heapSort([1, 5, 2, 0, 20], 5);
