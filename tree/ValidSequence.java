public class ValidSequence {
    public static void main(String[] args){
        TreeNode tree = new TreeNode(1);
        tree.left = new TreeNode(2);
        tree.left.left = new TreeNode(9);
        tree.right = new TreeNode(3);
        int[] arr = new int[3];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 4;

        System.out.println(isValidSequence(tree,arr,0));
    }

    private static boolean isValidSequence(TreeNode root, int[] arr, int index){
        if(index==arr.length) {
            return true;
        }else {
            if(arr[index]==root.element){
                boolean flag = false;
                if(root.left!=null){
                    flag = isValidSequence(root.left,arr,index+1);
                } 
                if(!flag && root.right!=null){
                    flag = isValidSequence(root.right,arr,index+1);
                }
                if(index == arr.length-1) {
                    return true;
                }
                return flag;
            } else {
                return false;
            }
        }
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