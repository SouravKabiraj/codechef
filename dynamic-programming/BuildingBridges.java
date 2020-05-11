import java.util.*;

public class BuildingBridges {

    public static void main(String[] args) {
        ArrayList<Integer> north = new ArrayList<>(); 
        ArrayList<Integer> south = new ArrayList<>();

        // 8 1 4 3 5 2 6 7 
        // 1 2 3 4 5 6 7 8

        north.add(8);
        south.add(1);

        north.add(1);
        south.add(2);
        
        north.add(4);
        south.add(3);
        
        north.add(3);
        south.add(4);

        north.add(5);
        south.add(5);

        north.add(2);
        south.add(6);
        
        north.add(6);
        south.add(7);
        
        north.add(7);
        south.add(8);


        System.out.println(getGetBridgeCount(north,south,-1,-1)-1);

    }

    private static int getGetBridgeCount(List<Integer> north, List<Integer> south, int lastNorth, int lastSouth) {
        if(north.size()==0){return 0;}
        if(north.size()==1){return 1;}
        int max = 0;
        for(int i=0; i<north.size();i++) {
            int northCityIndex = north.get(i);
            int southCityIndex = south.get(i);
            if ((lastNorth<northCityIndex && lastSouth>southCityIndex || lastNorth>northCityIndex && lastSouth<southCityIndex)) {
              north.remove(i);
              south.remove(i);
            }
        }

        for(int i=0; i<north.size();i++) {
            int northCityIndex = north.get(i);
            int southCityIndex = south.get(i);
            if (!(lastNorth<northCityIndex && lastSouth>southCityIndex || lastNorth>northCityIndex && lastSouth<southCityIndex)) {
                List<Integer> northClone = new ArrayList<>(north);
                List<Integer> southClone = new ArrayList<>(south);
                northClone.remove(i);
                southClone.remove(i);
                max = Math.max(max,getGetBridgeCount(northClone,southClone,northCityIndex,southCityIndex));
            }
        }

        System.out.println(north +" "+lastNorth);
        System.out.println(south+ " "+lastSouth);
        System.out.println(max+1);
        return max+1;
    }
}