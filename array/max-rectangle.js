
function GetMaxRectangle(A) {
    let flag = 0;
    for(let i= 0; i<A.length; i ++) {
        let max,min;
        for(min=i;min>=0;min--){
            if(A[min]<A[i]){
                break;
            }
        }
        for(max=i;max<A.length;max++){
            if(A[max]<A[i]){
                break;
            }
        }
        let len = (max-1)-(min+1) +1;
        flag = Math.max((len * A[i]),flag);
    }
    return flag;
}

console.log(GetMaxRectangle([1,3,2,4,5]));