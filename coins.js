process.stdin.resume();
process.stdin.setEncoding('utf8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function coinMaxValue(coin) {
    if (coinValues[coin]) {
        return coinValues[coin];
    } else {
        if (coin < 12) {
            coinValues[coin] = coin;
            return coin;
        } else {
            coinValues[coin] = coinMaxValue(parseInt(coin / 2)) + coinMaxValue(parseInt(coin / 3)) + coinMaxValue(parseInt(coin / 4));
            return coinValues[coin];
        }
    }
}

const coinValues = {};


rl.on('line', (line) => {
    let c = parseInt(line);
console.log(coinMaxValue(c));
})
