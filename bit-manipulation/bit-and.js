function getBitwiseAnd(start,end) {
    console.log(`${start} ${end}`);
    if(start == end ){
        return start;
    }else {
    let i;
    for( i =2 ; i<end; i= 2*i) {       
    }  
    i= i/2; 
    if(start >= i) {
        return getBitwiseAnd(start-i,end-i) | i ;
    } else {
        return getBitwiseAnd(start,i-1) & getBitwiseAnd(0,end-i);
    }
}
}

console.log(getBitwiseAnd(16,19));