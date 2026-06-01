function solution(my_string, letter) {
    var answer = '';
    for(let i=0; i<my_string.length;i++){
        console.log(`i = ${i}`);
        console.log(my_string[i]);
        console.log(letter);
        if(my_string[i] != letter)
            answer += my_string[i];
    }
    return answer;
}
// my_string[i] ! = f true 이면 answer 넣고
// false 이면 answer 넣지 않고
const result = solution("abcdef","f") //"abcd"
console.log(result);

