const http = require('http');  // http 모듈 가져오기

// http 백엔드 서버 생성하면서 요청 객체인 req, 응답객체인 res 설정 사용
const server = http.createServer((req, res) => {
     //정상코드 200설정
    res.statusCode = 200;
    //응답에서 문저열이 날아간다는 설정
    res.setHeader('Content-Type', 'text/plain');
    //문자열 Hello World 전송설정
    res.end('gotcha!\n');
});

// 서버가 3000 port를 사용해서 실행되어지고 있다는 설정
server.listen(3000, '0.0.0.0',() => {
    console.log('Sever ruming at http://localhost:3000/')
});