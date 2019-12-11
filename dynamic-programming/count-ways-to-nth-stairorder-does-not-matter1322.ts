function getNumberOfWayToClimb(stair: number): number {
    if (dynamicTable[stair] === null || dynamicTable[stair] === undefined) {
        const number = getNumberOfWayToClimb(stair - 1) + getNumberOfWayToClimb(stair - 2);
        return number;
    } else {
        return ;
    }
}

console.log(getNumberOfWayToClimb(5));

const dynamicTable = [1, 1];
