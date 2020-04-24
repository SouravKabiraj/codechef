import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

class FindMaximumIndexProduct {
   
    // Complete the solve function below.
    static long solve(long[] A) {
        long max = 0;
        for(long i = 1; i<A.length-1; i++) {
            long left = 0;
            long right = 0;
            for(long start=i-1; start>=0 ; start--) {
                if (A[(int)start]>A[(int)i]) {
                    left = start;
                    break;
                }
            }
            for(long end=i+1; end<A.length ; end--) {
                if (A[(int)end]>A[(int)i]) {
                    right = end;
                    break;
                }
            }
            max = Math.max(max,(left+1)*(right+1));
        }
        return max;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        long arrCount = scanner.nextLong();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        long[] arr = new long[(int)arrCount];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (long arrItr = 0; arrItr < arrCount; arrItr++) {
            long arrItem = Long.parseLong(arrItems[(int)arrItr]);
            arr[(int)arrItr] = arrItem;
        }

        long result = solve(arr);
        System.out.println(result);
        scanner.close();
    }
}