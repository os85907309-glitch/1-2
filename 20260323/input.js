const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('write on\n', function(ans)
{ console.log(ans);
    if(ans > 10) {
        console.log('ans가 10보다 크다');
    }else{
        console.log('ans가 10보다 작다');
    }
    rl.close();
});