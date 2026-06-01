// cmd + x 한줄 정렬
// option + shift + f 여러줄 정렬
// let 변경가능
// const 상수값이 변경이 불가능
function myTest()
{
    if(true)
    {
        var x = 100;
    }
    console.log(x);
}
myTest();

const name = "미르";
const age = 17;
const height = 180;

console.log("My name is " + name + ", I'm " + age + " years old, and my height is " + height + "cm.");
// 이렇게 하는것 보다는 아래것 처럼 하면 아주 편안쓰 파이썬의 f-string과 비슷하다.
console.log(`My name is ${name}, 
    I'm ${age} years old, 
    my height is ${height}cm.`);

let dic = new Object();

dic.boy = "소년";
dic.girl = "소녀";
dic.friend = "친구";
dic.doA = function(){
    console.log("doA 함수");
}
console.log(dic);
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
console.log(dic.doA());
dic.doA();

//AI 활용하는데, 이해하려면 해라. 제발