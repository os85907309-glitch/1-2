const fs = require('fs');

const test =fs.readFileSync('ex01.js','utf-8');

console.log(test);

let id = "jamsu";
let pw = "1111";

let user = {
    id,
    pw,
}
console.log(user.id);
console.log(user.pw);

let user2 = {
    id:"dragonspace",
    pw:"1209",
    name: "mir",
    mobile:"010XXXX",
    country:"republic of korea"
}

for (let info in user2){
    console.log(`{$[info] : $[info]}`);
}
