const[a,b, ...rest] = ['C#','javascript','python','react','C++'];
console.log(a);
console.log(b);
console.log(rest);

const arr1 = ['C#','javascript'];
const arr2 = ['python','react','C++'];
const arr3 = [...arr1,...arr2];

console.log(arr3);