function getMaxProfit(price: number[], k: number): number[][] {
    const profit: number[][] = [];
    for (let i = 0; i < price.length; i++) {
        profit[i] = [];
        for (let j = i + 1; j < price.length; j++) {
            profit[i][j] = price[j] - price[i];
        }
    }
    return profit;
}


console.log(getMaxProfit([1, 3, 2, 0, 30, 3, 90], 2));


[
    [0, 2, 1, -1, 29, 2, 89],
    [0, 0, -1, -3, 27, 0, 87],
    [0, 0, 0, -2, 28, 1, 88],
    [0, 0, 0, 0, 30, 3, 90],
    [0, 0, 0, 0, 0, -27, 60],
    [0, 0, 0, 0, 0, 0, 87],
]
