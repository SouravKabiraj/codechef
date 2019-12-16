function getAllPermutations(chars: string[], current: string): string[] {
    if (!chars.length) {
        return [current];
    } else {
        const strings = [];
        for (let i = 0; i < chars.length; i++) {
            const newCharList = [...chars];
            newCharList.splice(i, 1);
            const permutations = getAllPermutations(newCharList, current + chars[i]);
            strings.push(...permutations);
        }
        return strings;
    }
}

console.log(getAllPermutations(['A', 'B', 'C'], ''));