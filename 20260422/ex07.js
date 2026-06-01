const unit = {
    attack(weapon){
        return weapon+" attack";
    }
}

console.log(unit.attack('fist'));
console.log(unit.attack('gun'));



const obj = {
    0:'0입니다'
}

console.log(obj['0']);
// console.log(obj.0); 이거 안됨 never! 


const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let dic = {
    boy:"소년",
    girl:"소녀",
    friend:"친구"
};

rl.question('find out the word',function(data) {
        console.log(dic[data]);
        rl.close();
});