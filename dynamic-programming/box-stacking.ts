function getMaxHeight(arr: number[]): number {
    const actualBoxes: Box[] = [];
    let allTypeBoxes: Box[] = [];
    for (let i = 0; i < arr.length; i = i + 3) {
        actualBoxes.push(new Box(arr[i], arr[i + 1], arr[i + 2]));
    }
    actualBoxes.forEach(box => {
        allTypeBoxes.push(...getDifferentInstanceOfBox(box));
    });
    allTypeBoxes = allTypeBoxes.sort(sortBoxByBaseArea);

    let i = 1;
    let j = 0;
    const result = [];
    const stack = [];
    allTypeBoxes.forEach(box => {
        result[allTypeBoxes.indexOf(box)] = box.h;
        stack[allTypeBoxes.indexOf(box)] = allTypeBoxes.indexOf(box);
    });
    console.log(allTypeBoxes);
    while (i < allTypeBoxes.length) {
        if (result[i] < result[j] + allTypeBoxes[i].h && isStackable(allTypeBoxes[i], allTypeBoxes[j])) {
            result[i] = result[j] + allTypeBoxes[i].h;
            stack[i] = j;
        }
        if (i == j + 1) {
            i++;
            j = 0;
        } else {
            j++;
        }
    }
    console.log(stack);
    console.log(result);
    return result[allTypeBoxes.length - 1];
}

function sortBoxByBaseArea(box1: Box, box2: Box) {
    return box2.getBaseArea() - box1.getBaseArea();
}

function isStackable(top: Box, bottom: Box): boolean {
    return top.l < bottom.l && top.w < bottom.w;
}

function getDifferentInstanceOfBox(box: Box): Box[] {
    const boxes = [];
    boxes.push(new Box(box.h, Math.max(box.l, box.w), Math.min(box.l, box.w)));
    boxes.push(new Box(box.l, Math.max(box.w, box.h), Math.min(box.w, box.h)));
    boxes.push(new Box(box.w, Math.max(box.l, box.h), Math.min(box.l, box.h)));
    return boxes;
}

class Box {
    constructor(public h: number, public l: number, public w: number) {
    }

    public getBaseArea(): number {
        return this.l * this.w;
    }
}

console.log(getMaxHeight([4, 6, 7, 1, 2, 3, 4, 5, 6, 10, 12, 32]));
