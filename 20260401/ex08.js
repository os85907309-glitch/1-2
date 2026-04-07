function solution(start_num, end_num) {
    // let 기본자료형 변경 가능
    // const 기본자료형 변경 불가 오브잭트형은 변경가능
    console.log(start_num, end_num); //배열 또한 오브잭트형 타입
    for (let i=start_num;i<=end_num;i++){
        console.log(`i = ${i}`);
        answer.push(i);
    }
    console.log(answer);
    return answer;
}
 
// 만약 3,5 입력하였으면 배열 [3,4,5]변환
// 만약 1,3 입력하였으면 배열 [1,2,3]변환

const ret = (solution(3,5));
console.log(ret); 