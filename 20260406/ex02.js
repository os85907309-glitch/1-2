function showmsg() {
    console.log('sent message');
}

showmsg();

function plus(a,b){
    console.log(`a+b = ${a+b}`);
    return 10;  // 함수 종료 역할. . . 아무것도 돌려주지 않는다.
}

const result = plus(3,5);
console.log(`result ${result}`);

// 개발 입문자 for wile if else function