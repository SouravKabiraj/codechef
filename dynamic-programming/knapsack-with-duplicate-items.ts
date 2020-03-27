function getMaxValue(wgs: number[], sortedDens: number[], maxWg: number): number {
    const DP = [];
    for (let j = 0; j <= maxWg; j++) {
        DP.push([]);
        for (let i = 0; i < wgs.length; i++) {
            DP[j].push(0);
        }
    }

    for (let i = 1; i <= maxWg; i++) {
        for (let j = 0; j < wgs.length; j++) {
            const value = wgs[j] * sortedDens[j];
            if (i < wgs[j]) {
                DP[i][j] = DP[i][j - 1];
            } else if (i % wgs[j] === 0) {
                DP[i][j] = value * (i / wgs[j]);
            } else {
                DP[i][j] = value * Math.floor(i / wgs[j]) + DP[i % wgs[j]][j - 1];
            }
        }
    }

    return DP[maxWg][wgs.length - 1];
}

function main() {
    const wgs = [1, 3, 4, 5];
    const vals = [1, 4, 5, 7];
    const dens = [];
    for (let i = 0; i < wgs.length; i++) {
        dens.push(vals[i] / wgs[i]);
    }
    const sortedDens = [...dens].sort(compair);
    const sortedWgs = wgs.sort((a: number, b: number): number => {
        const value1 = dens[wgs.indexOf(a)];
        const value2 = dens[wgs.indexOf(b)];
        return value1 - value2;
    })

    console.log(getMaxValue(wgs, sortedDens, 8));
}

function compair(value1: number, value2: number): number {
    return value1 - value2;
}


main();
