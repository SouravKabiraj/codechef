
public class PartitionSetIntoKSubset {
    public static void main(String[] arg) {
        log(getCount(3,2));
    }

    private static void log(int text) {
        System.out.println(text);
    }

    private static void log(String text) {
        System.out.println(text);
    }

    private static int getCount(int n, int k) {
        log(n+ " "+k);
        if (n==0 || k==0){
            return 0;
        }
        if (n<k){
            return 1;
        } else if(n==k) {
            return 1;
        } else {
            return k* getCount(n-1,k) + getCount(n-1,k-1);
        }
    }
}