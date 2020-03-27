function getMinNumberOfCoins(num: number, coinsUsed: number): number {
    if (num == 0) {
        return coinsUsed;
    } else if (num == 1 || num == 2 || num == 5) {
        return coinsUsed + 1;
    } else {
        const numberOfDigit = getNumberOfDigit(num);
        const divAbleNum = numberWithZero(numberOfDigit);
        const firstDigit = Math.floor(num / divAbleNum);
        if (firstDigit >= 5) {
            return getMinNumberOfCoins(num - divAbleNum * 5, coinsUsed + 1);
        } else if (firstDigit >= 2) {
            return getMinNumberOfCoins(num - divAbleNum * 2, coinsUsed + 1);
        } else if (firstDigit >= 1) {
            return getMinNumberOfCoins(num - divAbleNum, coinsUsed + 1);
        }
    }
}

function numberWithZero(numberOfDigit: number) {
    let num = 1;
    while (numberOfDigit > 1) {
        num = num * 10;
        numberOfDigit--;
    }
    return num;
}

function getNumberOfDigit(num: number): number {
    if (num < 10) {
        return 1;
    } else {
        let count = 0;
        while (num) {
            num = Math.floor(num / 10);
            count++;
        }
        return count;
    }
}

console.log(getMinNumberOfCoins(5713, 0));
