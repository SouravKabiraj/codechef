class TreeNode {
    public element: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(element: number) {
        this.element = element;
    }
}

function getBottomView(tree: TreeNode, hashMaps: any, distance: number, height: number): any {
    if (!tree) {
        return hashMaps;
    }
    if (hashMaps[distance]) {
        hashMaps[distance] = hashMaps[distance].height < height ? {
            height: height,
            value: tree.element
        } : hashMaps[distance];
    } else {
        hashMaps[distance] = {
            height: height,
            value: tree.element
        };
    }
    hashMaps = getBottomView(tree.left, hashMaps, distance - 1, height + 1);
    hashMaps = getBottomView(tree.right, hashMaps, distance + 1, height + 1);
    return hashMaps;
}


const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.left.right = new TreeNode(10);
treeNode.left.left = new TreeNode(11);
treeNode.left.left.left = new TreeNode(12);
treeNode.left.left.right = new TreeNode(13);
treeNode.right = new TreeNode(3);
console.log(getBottomView(treeNode, {}, 0, 0));
