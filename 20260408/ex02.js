// 함수. . .
// 지역변수,매개변수,전역변수

// 매개변수 개수 불일치상황

// 매체변수 받은 부분 없음
// 개수가 불일치함
function doA(a){
    console.log(`a = ${a}`);
    console.log(arguments);
    const obj = {
        a:10
    }
    console.log(obj);
    console.log(obj.a);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

doA(10,20,30);