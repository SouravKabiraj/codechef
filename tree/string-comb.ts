function getAllComb(str: string[], i: number) {
    if (i == str.length) {
        return [str];
    } else {
        let str1 = [...str];
        str1.splice(i, 1);
        return [...getAllComb(str, i + 1), ...getAllComb(str1, i)];
    }
}

console.log(getAllComb(['A', 'B', 'C'], 0));
