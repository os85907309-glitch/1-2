function solution(numbers) {
    var answer = 0;
    // for(let i=0; i<numbers.length; i++);{
    //     // answer = 
    //     // numbers 안에 있는 값 출력해보기
    //     console.log(numbers[i]); 
    // }
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); 
        answer = numbers[i]+answer 
        
    }
    console.log(`answer ${answer}`);
    // answer = numbers[answer]
    // answer 총합이 들어가있는데 그것을 numbers.length 로 나누어서 answer에 넣으면 된다.
    answer = answer/numbers.length;
    return answer;
}

const ret = (solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ret)