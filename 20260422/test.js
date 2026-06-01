function solution(n) {
    let sum = 0;
    for(let i = 1; i <= n;i++){
        if(i % 2 === 0){
            console.log(i);
            sum += i;
        }       
    }
    return sum;
}

const ret = solution(10);
console.log(ret);