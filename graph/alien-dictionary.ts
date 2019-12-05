const dic = ["baa", "abcd", "abca", "cab", "cad"];
getOrder(dic);

function getOrder(dic: string[]) {
    let maxLen = 0;
    const priority = [];
    for (let i = 0; i < dic.length; i++) {
        if (maxLen < dic[i].length) {
            maxLen = dic[i].length;
        }
    }

    for (let i = maxLen - 1; i >= 0; i--) {
        for (let j = dic.length - 1; j > 0; j--) {
            console.log(`${dic[j - 1][i]} <- ${dic[j][i]}`);
            if (dic[j][i] && dic[j - 1][i] && dic[j][i] !== dic[j - 1][i]) {
                const priorityZ = getPriority(priority, dic[j][i]);
                const priorityY = getPriority(priority, dic[j - 1][i]);
                console.log(`${priority[priorityY]} <- ${priority[priorityZ]}`);
                if (priorityZ < priorityY) {
                    setPriority(priority, dic[j - 1][i], priorityZ);
                }
            }
        }
    }
    console.log(priority);
}

function getPriority(priority: string[], num: string): number {
    if (priority.indexOf(num) == -1) {
        priority.push(num);
    }
    return priority.indexOf(num);
}

function setPriority(priority: string[], num: string, newPriority: number): void {
    const currentPriority = getPriority(priority, num);
    for (var i = currentPriority - 1; i >= newPriority; i--) {
        priority[i + 1] = priority[i];
    }
    priority[newPriority] = num;
}
