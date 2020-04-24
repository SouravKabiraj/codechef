const visit = []

function getCriticalFloor(start: number, end: number, k: number): number {
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    if (!visit[mid]) {
        visit[mid] = true;
        count++;
    }

    if (!visit[mid + 1]) {
        visit[mid + 1] = true;
        count++;
    }


    if (mid === k) {
        return count;
    } else if (k > mid) {
        start = mid + 1;
        return getCriticalFloor(start, end, k) + count;
    } else {
        end = mid - 1;
        return getCriticalFloor(start, end, k) + count;
    }
}


console.log(getCriticalFloor(1, 10, 2));
