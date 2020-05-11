import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class ArrayPair {

    static long[] numberCounts;

    // Complete the solve function below.
    static long solve(int[] arr) {
        long count =0;
        long max =getMax(arr);
        numberCounts = new long[max];
    }

     static long setup(int[] arr) {
        for(int i=0 ; i< arr.length; i++) {
            numberCounts[(int)arr[i]]++; 
        }
    }

    static long getMax(int[] arr) {
        long max = 0;
        for(int i=0 ; i< arr.length; i++) {
            max = Math.max(max,arr[i]);
        }
        return max;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {

        int arrCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        String[] arrItems = scanner.nextLine().split(" ");

        int[] arr = new int[arrItems.length];
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < arrCount; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            System.out.println(arrItem);
            arr[i] = arrItem;
        }

        long result = solve(arr);

        System.out.println(result);

        scanner.close();
    }
}
