import java.util.HashMap;
import java.util.ArrayList;
import java.util.Arrays;

public class FirstUniqueElementProblem {
    public static void main(String[] args){
        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 2;
        arr[4] = 1;
        FirstUniqueElement f = new FirstUniqueElement(arr);
        log(f.get());
        f.add(3);
        log(f.get());
        f.add(4);
        log(f.get());
        f.add(5);
        log(f.get());
         f.add(4);
        log(f.get());
    }

    private static void log(int ele) {
        System.out.println(ele);
    }
}


class FirstUniqueElement  {
    private HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
    private ArrayList<Integer> arr = new ArrayList<Integer>();
    int lastInd = 0;

    FirstUniqueElement(int[] arr) {
        for(int i=0; i<arr.length;i++){
            int a= arr[i];
            if(map.containsKey(a)){
                map.put(a,map.get(a)+1);
            } else {
                this.arr.add(a);
                map.put(a,1);
            }
        }
    }

    public int get() {
        System.out.println(arr);
        System.out.println(map);
        while(map.get(arr.get(lastInd))!=1){
            lastInd++;
            if(lastInd==arr.size()){
                break;
            }
        }
        if(lastInd<arr.size()) {
            return arr.get(lastInd);
        }else {
            return -1;
        }
    }

    public void add(int element) {
        if(map.containsKey(element)){
            map.put(element,2);
        } else {
            arr.add(element);
            map.put(element,1);
            System.out.println(arr);
            System.out.println(map);
        }
    }
}