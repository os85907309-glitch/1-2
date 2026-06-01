function solution(strlist) {
    var answer = [];
    for(let i = 0; i < strlist.length;i++){
        answer.push(strlist[i].length);
    }
    return answer;
}
const ret = 
    solution(["We", "are", "the", "world!"]);

console.log(ret);