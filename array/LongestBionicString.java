import java.util.*; 

class LongestBionicString {
    private static int[] LDP;
    private static int[] RDP;
    private static int[] DP;

    public static void main(String[] args) {
        int[] text= new int[6];
        text[0] = 80;
        text[1] = 60;
        text[2] = 30;
        text[3] = 40;
        text[4] = 20;
        text[5] = 10;
        

        LDP = new int[text.length];
        RDP = new int[text.length];
        DP = new int[text.length];
        int value =  getLength(text);
        
        var ldp = (new ArrayList<> (Arrays.asList(LDP)));
         var rdp =(new ArrayList<> (Arrays.asList(RDP)));
         var dp =(new ArrayList<> (Arrays.asList(DP)));

        ldp.forEach(l->{
            System.out.println(l);
        });
        

        System.out.println(value);
    }

    private static int getLength(int[] text) {
        int max = 0;
        for(int i=0; i<text.length; i++) {
            int l =getLOf(text,i);
            int r = getROf(text,i);
            DP[i] = l + r -1;
            max = Math.max(max,DP[i]);
        }
        return max;
    }

    private static int getLOf(int[] text, int i) {
        if(LDP[i]!=0) return LDP[i];
        int maxL = 0;
        for(int l=i-1; l>=0; l--){
            if(text[i]>=text[l]){
                maxL=  Math.max(getLOf(text,l),maxL);
            }
        }
        LDP[i] = maxL+1;
        return maxL+1;
    }

    private static int getROf(int[] text, int i) {
         if(RDP[i]!=0) return RDP[i];
        int maxR = 0;
        for(int r=i+1; r<text.length; r++){
            if(text[i]>=text[r]){
                maxR=  Math.max(getROf(text,r),maxR);
            }
        }
        RDP[i] = maxR+1;
        return maxR+1;
    }
}