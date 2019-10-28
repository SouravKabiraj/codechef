class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

function addNode(element: number, parent: number, tree: TreeNode): void {
    const node = new TreeNode(element);
    if (tree) {
        if (tree.element === parent) {
            (!tree.left) ? tree.left = node : tree.right = node;
        } else {
            addNode(element, parent, tree.left);
            addNode(element, parent, tree.right);
        }
    }
}

function getCombinationCountFor(tree: TreeNode, k: number): number {
    let combinationsCount;
    let count = 0;
    if (tree) {
        const remainNumber = k - tree.element;
        if (remainNumber > 0) {
            const leftValues = getAllValuesLessThan(remainNumber, tree.left);
            const rightValues = getAllValuesLessThan(remainNumber, tree.right);
            combinationsCount = getCountOfCombinationWithSum(remainNumber, [...leftValues, ...rightValues]);
        }
        return combinationsCount + getCombinationCountFor(tree.left, k) + getCombinationCountFor(tree.right, k);
    } else {
        return 0;
    }
}

function getCountOfCombinationWithSum(k: number, inputs: number[]) {
    let count = 0;
    for (let i = 0; i < inputs.length - 1; i++) {
        for (let j = i + 1; j < inputs.length; j++) {
            if (k <= inputs[i] + inputs[j]) {
                count++;
            }
        }
    }
    return count;
}

function getAllValuesLessThan(remain: number, tree: TreeNode): number[] {
    if (!tree) {
        return [];
    } else {
        const leftValues = getAllValuesLessThan(remain, tree.left);
        const rightValue = getAllValuesLessThan(remain, tree.right);
        return tree.element <= remain ? [...leftValues, ...rightValue, tree.element] : [...leftValues, ...rightValue];
    }
}

const tree = new TreeNode(1);
addNode(2, 1, tree);
addNode(3, 2, tree);
addNode(4, 2, tree);
addNode(5, 1, tree);
console.log(getCombinationCountFor(tree, 6));
