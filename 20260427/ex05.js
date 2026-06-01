const color = ['red','green','blue'];

let [r,g,b] = color;
[b,g,r] = [r,g,b];

console.log(r); console.log(g); console.log(b);

let user = {
    id : 'jamsuham',
    pw : '6748',
    name : '잠수타기',
    age : '???'
};

// let id = user.id;
// let pw = user.pw;
// let name = user.name;
// let age = user.age;

const {id,pw,name,age} = user;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);