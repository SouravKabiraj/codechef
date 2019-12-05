function getAllPrimeTill(n: number): number[] {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        primes.push(i);
    }
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] * primes[i] < n) {
            markAllMultiples(i, primes);
        }
    }
    return primes;
}

function markAllMultiples(index: number, primes: number[]): void {
    for (let i = index + 1; i < primes.length; i++) {
        if (primes[i] % primes[index] === 0) {
            primes.splice(i, 1);
            i--;
        }
    }
}


console.log(getAllPrimeTill(100));
