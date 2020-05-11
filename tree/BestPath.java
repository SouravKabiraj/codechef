public class BestPath {
    private static int maxPath = 0;

    public static void main(String[] args){
        TreeNode tree = new TreeNode(-10);
        tree.left = new TreeNode(-20);
        tree.right = new TreeNode(10);
        tree.left.left = new TreeNode(4);
        tree.left.right = new TreeNode(5);
        tree.right.left = new TreeNode(3);
        tree.right.right = new TreeNode(103);
        getMaxPathValue(tree);
        System.out.println(maxPath);
    }

    private static int getMaxPathValue(TreeNode root) {
        if(root==null) {return 0;}
        int maxLeftPath = getMaxPathValue(root.left);
        int maxRightPath = getMaxPathValue(root.right);
        int currentMax = Math.max(root.element,root.element+Math.max(maxLeftPath,maxRightPath));
        maxPath = Math.max(Math.max(currentMax,root.element + maxLeftPath + maxRightPath), maxPath);
        System.out.println( root.element+"->"+currentMax);
        System.out.println( root.element+"->"+maxPath);
       return currentMax;
    }
}

class TreeNode {
    public int element;
    public TreeNode left;
    public TreeNode right;

    TreeNode(int element) {
        this.element = element;
    }
}


/*
                -10
                /  \
               -20   10
             / \    /  \
            4   5  3   103

*/