function editDiatance(input1: string[], input2: string[]): number {
    const ed: number[][] = [];
    for (let i = 0; i <= input1.length; i++) {
        ed[i] = [];
        ed[i][0] = i;
    }
    for (let j = 0; j <= input2.length; j++) {
        ed[0][j] = j;
    }
    for (let i = 1; i <= input1.length; i++) {
        for (let j = 1; j <= input2.length; j++) {
            if (input1[i] === input2[j]) {
                ed[i][j] = ed[i - 1][j - 1];
            } else {
                ed[i][j] = 1 + Math.min(ed[i][j - 1], ed[i - 1][j], ed[i - 1][j - 1]);
            }
        }
    }
    return ed[input1.length][input2.length];
}

console.log(editDiatance(['s', 'u', 'n', 'd', 'a', 'y'], ['s', 'a', 't', 'u', 'r', 'd', 'a', 'y']));
