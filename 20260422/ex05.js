const person = {
    name:"미르",
    age:17,
    gender:"남"
}

console.log(person);

person.legs = 2;
person.height = 180;

console.log(person);
delete person.legs;
console.log(person);

person.height = 190;
console.log(person);