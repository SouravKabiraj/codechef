const MAX = 9999999999999999999999999;

function getPairWithCloseToXSum(arr: number[], x: number): { r: number, l: number } {
    let l = 0;
    let r = arr.length - 1;
    let diff = MAX;
    let r1, l1;
    while (l < r) {
        if (diff > Math.abs(arr[r] + arr[l] - x)) {
            diff = Math.abs(arr[r] + arr[l] - x);
            r1 = r;
            l1 = l;
        }
        if (x < (arr[r] + arr[l])) {
            r--;
        } else {
            l++;
        }
    }
    return {r: arr[r1], l: arr[l1]};
}

console.log(getPairWithCloseToXSum([10, 22, 28, 29, 30, 40], 54));