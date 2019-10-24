function getRegionAreaFor(input: number[][], point: Point): { area: number, updatedInput: number[][] } {
    if (point.i >= input.length || point.i < 0 || point.j >= input[point.i].length || point.j < 0) {
        return {area: 0, updatedInput: input};
    } else {
        if (input[point.i][point.j] === 0) {
            return {area: 0, updatedInput: input};
        } else {
            input[point.i][point.j] = 0;
            const region1 = getRegionAreaFor(input, new Point(point.i + 1, point.j));
            const region2 = getRegionAreaFor(region1.updatedInput, new Point(point.i + 1, point.j + 1));
            const region3 = getRegionAreaFor(region2.updatedInput, new Point(point.i + 1, point.j - 1));
            const region4 = getRegionAreaFor(region3.updatedInput, new Point(point.i - 1, point.j));
            const region5 = getRegionAreaFor(region4.updatedInput, new Point(point.i - 1, point.j - 1));
            const region6 = getRegionAreaFor(region5.updatedInput, new Point(point.i - 1, point.j + 1));
            const region7 = getRegionAreaFor(region6.updatedInput, new Point(point.i, point.j - 1));
            const region8 = getRegionAreaFor(region7.updatedInput, new Point(point.i, point.j + 1));
            return {
                area: (1 + region1.area + region2.area + region3.area + region4.area + region5.area + region6.area + region7.area + region8.area),
                updatedInput: region8.updatedInput
            }
        }
    }
}

function largestRegion(input: number[][]): number {
    let max = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const regionAreaFor = getRegionAreaFor(input, new Point(i, j));
            const regionArea = regionAreaFor.area;
            input = regionAreaFor.updatedInput;
            max = max < regionArea ? regionArea : max;
        }
    }
    return max;
}

class Point {
    public i: number;
    public j: number;

    constructor(i: number, j: number) {
        this.i = i;
        this.j = j;
    }
}

const input = [
    [1, 1, 1],
    [0, 0, 1],
    [1, 0, 1]
];
console.log(largestRegion(input));