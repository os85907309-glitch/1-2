// let 기본자료형 변경가능
// const 기본자료형 변경 불가능
// const로 선언이 프로퍼티 추가삭제수정이 가능하지만 새로운 객체(오브잭트)를 담는건 불가능
let sum = 10;

const car = {
    // 객체 안에 있는 변수
    // 프로포티, 속성
    name:"쏘나타",
    brand:"현대자동차"
}
car.doDrive = ()=>{
    console.log('쏘나타 부르릉');
}
car = { };
console.log(car);
car.doDrive(); 