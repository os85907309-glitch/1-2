// class A{
//     constructor(){
//         console.log("생성자");
//     }
// }
// const a = new A();
const obj = new Object();
// 객체안에 있는 변수는 프로퍼티라고 한다.
// 프로퍼티는 한개의 함수
// 프로퍼티즈는 여러개의 함수
obj.boy = "소년";
obj.girl = "소녀";
obj.friend = "친구";
console.log(obj);
console.log(obj['boy']);
console.log(obj.boy);