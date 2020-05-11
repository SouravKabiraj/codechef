
public class WeightedJobScheduling {
    private static int MAX_TIME;

    public static void main(String arg[]){
        int[][] tasks = new int[4][3];
        tasks[0][0]=1;
        tasks[0][1]=2;
        tasks[0][2]=50;

        tasks[1][0]=3;
        tasks[1][1]=5;
        tasks[1][2]=20;

        tasks[2][0]=6;
        tasks[2][1]=19;
        tasks[2][2]=100;

        tasks[3][0]=2;
        tasks[3][1]=100;
        tasks[3][2]=200;

        MAX_TIME= 6;
        log(getMaxProfit(tasks,1));
    }


    private static void log (int text) {
        System.out.println(text);
    }

    private static void log (String text) {
        System.out.println(text);
    }
    
    private static int getMaxProfit(int[][] task,int currentTime){
        if(currentTime<=MAX_TIME) {
            // pick a task that starts at {{currentTime}}
            int way1 = 0; 

            for (int i= 0;i<task.length;i++) {
                if(task[i][0]==currentTime) {
                    int profit = getMaxProfit(task, task[i][1])+ task[i][2];
                    way1 = Math.max(profit,way1);
                }
            }


            // dont pick any task now
            int way2 = getMaxProfit(task, currentTime+1);
            return Math.max(way1,way2);
        }else {
            return 0;
        }
    }
}