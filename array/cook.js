function getDishes(ing) {
    let str = [];
    let result = '';
    let fib = 0;
    let fat = 0;
    let carb = 0;
    for (let i = 0; i < ing.length; i++) {
        switch (ing[i]) {
            case 0:
                fib++;
                break;
            case 1:
                fat++;
                break;
            case 2:
                carb++;
                break;
        }
        const cookingResult = isCookable(fib, fat, carb);
        fib = cookingResult.fib;
        fat = cookingResult.fat;
        carb = cookingResult.carb;
        cookingResult.cook ? str.push(1) : str.push(0);
    }
    str.forEach(a => {
        result = a ? result + '1' : result + '0';
    })
    return result;
}

function isCookable(ing, used) {
    let fib = 0;
    let fat = 0;
    let carb = 0;
    for (let i = 0; i < ing.length; i++) {
        if (used[i]) {
            switch (ing) {
                case 0:
                    fib++;
                    break;
                case 1:
                    fat++;
                    break;
                case 2:
                    fat++;
                    break;
            }
        }
    }
    return {cook: false, fib, fat, carb};
}
