// 선언부에서 매개변수 3개
const aa = function(a,b=20,c=30){
      console.log(`a${a} b ${b} c ${c}`)
}

// 호풓부에서는 매개변수1개
aa(10);

let temp = "값을할당"

temp = temp ?? '앞에꺼 null,undefind';

console.log(`temp ${temp}`);