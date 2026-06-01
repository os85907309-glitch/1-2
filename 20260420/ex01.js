function solution(num1, num2) {
    //console.log(`num1 ${num1}`);
    //console.log(`num2 ${num2}`);
    // int()
    // list()
    // boolean
    var answer = parseInt(num1/num2*1000);
    return answer;
}

const ret = solution(7, 3);
console.log(ret);
