
public class LargestSubstringWithoutRepetingChars {
    public static void main(String[] args) {
        log(getLargestDistinctCharString("GEEKSFORGEEKS"));
    }

    private static void log(int text) {
        System.out.println(text);
    }

    private static void log(String text) {
        System.out.println(text);
    }

    private static int getLargestDistinctCharString(String text) {
        int max= 0;
        int[][] DP = new int[text.length()][text.length()];
        for(int i=0; i<text.length() ; i++) {
            DP[i][i]=1;
            if(max<DP[i][i]) {
                max=DP[i][i];
            }

        }

        for(int len= 2; len<=text.length(); len++) {
            for(int start= 0; start<text.length()-len+1 ; start++) {
                int end = start + len -1;
                if(DP[start][end-1]>0 && DP[start+1][end]>0 && text.charAt(start)!=text.charAt(end)) {
                    DP[start][end] = DP[start+1][end] +1;
                }else {
                    DP[start][end] = 0;
                }
                if(max<DP[start][end]) {
                    max=DP[start][end];
                }
            }
        }
        return max;
    }
}