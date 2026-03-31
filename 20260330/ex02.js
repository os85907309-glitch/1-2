const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function aa(){}
// const aa = ()=>{}

rl.question('write on number', (data) => {
    for (let num = 1;num < 10; num = num+1){
    console.log(`${data} * ${num} = ${data*num}`);
    }
    rl.close();
});