function solution(money) {
    console.log(Number(money-4000));
    let count = 0;
    while(true){
        if(money-5500 * count>=0){
             count++;
        }else{
            count--;
            break;
        }
    }
    console.log('아메리카노 살수 있는개수'.count);
    var answer = [count,mon3y- 5500 * count];
    return answer;
}
console.log(solution('5,500'));
onsole.log(solution('15,000'));
