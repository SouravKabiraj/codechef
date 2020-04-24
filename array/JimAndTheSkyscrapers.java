import java.util.*;


class JimAndTheSkyscrapers {
    public static void main(String[] arg) {
        int[] S = new int[6];
        S[0] = 3;
        S[1] = 2;
        S[2] = 1;
        S[3] = 2;
        S[4] = 3;
        S[5] = 3;
        System.out.println(getNumberOfWays(S));   
    }

    private static int getNumberOfWays(int[] S) {
        int ways = 0 ; 
        Stack<StackElement> stack = new Stack<StackElement>();
        for (int i= 0; i< S.length; i++) {
            while(!stack.empty() && stack.peek().element<S[i]){            
                stack.pop();
            }
            if (!stack.empty() && stack.peek().element==S[i]){
                stack.peek().count++;
                ways =ways + stack.peek().count;
            }else {
                stack.push(new StackElement(S[i]));
            }
        }
        return 2*ways;
    }

    // private static int getNumberOfWays(int[] S) {
    //     int ways = 0;
    //     for(int i =0 ; i<S.length-1; i++) {
    //         for(int j = i+1; j<S.length; j++) {
    //             if(S[i]==S[j]) {
    //                 ways++;
    //             }
    //             if (S[i]<S[j]){
    //                 break;
    //             }
    //         }
    //     }
    //     return ways*2;
    // }
}

class StackElement {
    public int element;
    public int count;
    StackElement(int element){
        this.element = element;
    }
}