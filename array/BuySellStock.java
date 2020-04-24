class BuySellStock{
    public static void main(String[] args){
        int[] prices = new int[5];
        prices[0] = 1;
        prices[1] = 10;
        prices[2] = 8;
        prices[3] = 10;
        prices[4] = 2;

        int profit = getMaxProfit(prices);
        System.out.println(profit);
    }

    private static int getMaxProfit(int[] prices){
        int profit = 0;
        for(int i= 0; i < prices.length-1; i++) {
            if(prices[i+1]>prices[i]) {
                profit = profit + prices[i+1] - prices[i];
            }
        }
        return profit;
    }
}
