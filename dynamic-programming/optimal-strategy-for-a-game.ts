function getOptimalValue(arr: number[], isYou: boolean) {
    if (arr.length === 1) {
        return isYou ? arr[0] : -1 * arr[0];
    } else {
        const deleteFirst = arr.slice(1);
        const deleteLast = arr.slice(0, arr.length - 1);
        const subByTakingFirstElement = getOptimalValue(deleteFirst, !isYou) + (isYou ? arr[0] : -1 * arr[0]);
        const subByTakingLastElement = getOptimalValue(deleteLast, !isYou) + (isYou ? arr[arr.length - 1] : -1 * arr[arr.length - 1]);
        const number = isYou ? Math.max(subByTakingFirstElement, subByTakingLastElement) : Math.min(subByTakingFirstElement, subByTakingLastElement);
        return number;
    }
}

console.log(getOptimalValue([8, 15, 3, 7], true));
