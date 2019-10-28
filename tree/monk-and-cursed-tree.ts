class TreeNode {
    constructor(element: number) {
        this.element = element;
        this.left = null;
        this.right = null;
    }

    public element: number;
    public left: TreeNode;
    public right: TreeNode;
}

class BSTree {
    public root: TreeNode = null;

    public add(element: number): void {
        const treeNode = new TreeNode(element);
        if (!this.root) {
            this.root = treeNode;
        } else {
            StaticClass.addNode(treeNode, this.root);
        }
    }
}

class StaticClass {
    public static getLargestNode(tree: BSTree, point1: number, point2: number): number {
        let index = 1;
        const list1 = StaticClass.findPathFromRootFor(point1, tree.root);
        const list2 = StaticClass.findPathFromRootFor(point2, tree.root);

        for (let i = 1; i < Math.max(list1.length, list2.length); i++) {
            if ((list2[i - 1] === list1[i - 1] && list2[i] === list1[i])) {
                index++;
            } else {
                break;
            }
        }
        const path = [...list1.slice(index - 1), ...list2.slice(index - 1)];
        return Math.max(...path);
    }

    public static addNode(newNode: TreeNode, tree: TreeNode): void {
        if (tree.element < newNode.element) {
            if (tree.right) {
                StaticClass.addNode(newNode, tree.right);
            } else {
                tree.right = newNode;
            }
        } else {
            if (tree.left) {
                StaticClass.addNode(newNode, tree.left);
            } else {
                tree.left = newNode;
            }
        }
    }

    public static findPathFromRootFor(findElement: number, tree: TreeNode): number[] {
        if (findElement === tree.element) {
            return [tree.element];
        } else if (findElement < tree.element) {
            const path = StaticClass.findPathFromRootFor(findElement, tree.left);
            return [tree.element, ...path];
        } else {
            const path = StaticClass.findPathFromRootFor(findElement, tree.right);
            return [tree.element, ...path];
        }
    }
}


const bsTree = new BSTree();
bsTree.add(50);
bsTree.add(30);
bsTree.add(70);
bsTree.add(40);
bsTree.add(20);
bsTree.add(60);
bsTree.add(100);

const largestNode = StaticClass.getLargestNode(bsTree, 20, 100);
console.log(largestNode);
