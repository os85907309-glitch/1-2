//for(초기값; 조건; 변경)
//for a inrange(5): 
//for구문 시작해줘 i=0부터...i<5까지...i+=1해서  1씩 증가해줘
let x = 10;
for (let i=0; i<5; i+=1) {
    console.log("i = " + i);
    //console.log("x = " +x++);//x값을 출력하고 x값증가
    console.log("x =" + ++x);;//x값증가시키고 x값을 출력
}
