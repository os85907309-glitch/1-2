const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('write on\n', function(ans) {
  console.log(ans);
    // 나누었을떄, 나머지가 0이면 짝수
    if(ans % 2 == 0){
        if(ans > 10) {
            console.log('ans가 짝수');
        }else{
            console.log('ans가 홀수');
        }
    }
    rl.close();
});