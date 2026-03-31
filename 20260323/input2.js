const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('write on\n', function(ans) {
  console.log(ans);
    // 나누었을떄, 나머지가 0이면 짝수
        if(ans > 60) {
            console.log('ans가 60보다 이상이면 통과');
        }else{
            console.log('ans가 60보다 이하이면 불합격');
        }
    rl.close();
});