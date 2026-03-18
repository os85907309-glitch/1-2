document.getElementById("chk").onclick = function () {
    console.log("test");
    const test = document.getElementById('num').value;
    console.log("test = " + test);

    if(test == ''){
        console.log("test를 입력해주세요");
        document.getElementById('print').textContent = "test를 입력해주세요";
        return;
    }

    if (test < 3) {
        console.log(test + "는 3보다 작다");
    } 
    else if (test == 3) {
        console.log(test + "는 3과 같다");
    }
    else {
        console.log(test + "는 3보다 크다");
    }
}