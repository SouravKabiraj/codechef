function isSubSetSum(arr: number[], start: number, end: number, sum: number): boolean {
    if (end === start) {
        if (arr[start] === sum) {
            console.log(`${start} : ${end}`);
        }
        return true;
    } else if (end > start) {
        isSubSetSum(arr, start, end - 1, sum);
        if (isSubSetSum(arr, start, end - 1, sum - arr[end]) == true) {
            console.log(`${start} : ${end}`);
            return true;
        } else {
            return false;
        }
    } else {
        return sum ? false : true;
    }
}

isSubSetSum([1, 2, 3, 5, 4, 1], 0, 5, 5);