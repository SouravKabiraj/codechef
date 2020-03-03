function getSubStringCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            count++;
        }
    }
    return count * (count - 1) / 2;
}

console.log(getSubStringCount('00100101'));
