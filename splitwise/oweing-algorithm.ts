class Activity {
    public title: string;
    public payment: {
        userId: number,
        amount: number
    }[];
    public distribution:
        {
            userId: number,
            amount: number
        }[];
}

function getOweAmount(from: number, to: number): number {
    const fromPersonGiven = getAmountGiven(from, to);
    const toPersonGiven = getAmountGiven(to, from);
    return fromPersonGiven - toPersonGiven;
}

function getDistributionPortionFor(to: number, activity: Activity): number {
    let totalAmount = 0;
    let actualAmount = 0;
    activity.distribution.forEach(dist => {
        totalAmount = totalAmount + dist.amount;
        actualAmount = (dist.userId === to) ? actualAmount + dist.amount : actualAmount;
    });
    return actualAmount / totalAmount;
}

function getAmountGiven(from: number, to: number): number {
    let amount = 0;
    activities.forEach(activity => {
        if (activity.distribution.some(dist => dist.userId == to)) {
            let distributionPortion = getDistributionPortionFor(to, activity);
            activity.payment.forEach(pay => {
                amount = amount + (pay.userId === from ? (distributionPortion * pay.amount) : 0)
            })
        }
    });
    return amount;
}

function getOweMatrix(group: number[]): number[][] {
    const mat = [];
    for (let i = 1; i <= group.length; i++) {
        mat[i] = [];
        for (let j = 1; j <= group.length; j++) {
            const oweAmount = getOweAmount(i, j);
            mat[i][j] = oweAmount > 0 ? oweAmount : 0;
        }
    }
    return mat;
}

function simplifyMe(mat: number[][]): number[][] {
    for (let k = 1; k < mat.length; k++) {
        for (let i = 1; i < mat.length; i++) {
            for (let j = 1; j < mat.length; j++) {
                if (mat[i][k] === mat[k][j]) {
                    mat[i][j] = mat[i][j] + mat[i][k];
                    mat[i][k] = 0;
                    mat[k][j] = 0;
                }
            }
        }
    }
    return mat;
}


const activity1 = new Activity();
activity1.payment = [{userId: 1, amount: 400}, {userId: 2, amount: 0}];
activity1.distribution = [
    {userId: 1, amount: 100},
    {userId: 2, amount: 100},
    {userId: 3, amount: 100},
    {userId: 4, amount: 100}
];
const activity2 = new Activity();
activity2.payment = [{userId: 2, amount: 500}, {userId: 3, amount: 0}];
activity2.distribution = [
    {userId: 1, amount: 200},
    {userId: 2, amount: 100},
    {userId: 3, amount: 100},
    {userId: 4, amount: 100}
];

const activities = [activity1, activity2];

const oweMat = getOweMatrix([1, 2, 3, 4]);
console.log(oweMat);
console.log('-----------------------');
console.log(simplifyMe(oweMat));