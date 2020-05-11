import java.util.*;

public class PartitionProblem{
    private static boolean[][] DP;
    public static void main(String[] args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(5);
        list.add(5);
        list.add(11);
        DP = new boolean[12][4];
        calculateDp(list,5);
        System.out.println(DP[5][3]);
    }

    private static void calculateDp(List<Integer> list, int temp){
        for(int i=0; i < list.size();i++){
            DP[0][i] =true;
        }
        for(int sum= 1; sum<=temp;sum++) {
            for(int i=0; i < list.size();i++){
                if(i==0) {
                    if(sum==list.get(i))
                        DP[sum][i] = true;
                }else {
                    DP[sum][i] = (DP[sum][i-1]);
                    if(sum-list.get(i)>=0 && DP[sum-list.get(i)][i-1])
                        DP[sum][i] = true;
                    if(sum==list.get(i))
                        DP[sum][i] = true;
                }
            }
        }
    }
}