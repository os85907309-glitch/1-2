//ez=xpress 웹 서버 모듈
const express = require('express');
//mysal 연결모둘
const mysql = require('mysql2/promise');
//paht 관리하는 모듈
// const path = require("path");
// 
// console.log(__dirname);
// // console.log(path.dirname(__dirname,"test.html"));
// 
const app = express();
const PORT = 3000;


// mysal 3306 포트로 연결
// localhost: 172.28.1.221 

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "1-2",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱하기 위함
// app.use(express.json());
// 임시 데이터베이스 (메모리 배열)
let users = [
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '이순신', email: 'lee@example.com' }
];


app.get("/", (ren, res) => {
    res.send("main page");
});

app.get("/test", (reg, res) => {
    res.sendFile(__dirname , "test.html");
});

//req 요청 데이터 들어간다. //res.send() -> 문자열 보내기 //res.json()-> json 변수안에 값 보내기

app.get("/users", async (req, res) => {
    console.log(req.ip + " who is asking with backend");
    res.status(200).json(users);
    try {
        const [rows] = await pool.query('select * from users');
        console.log(rows);
        res.json(rows);
    } catch (e) {
        console.log(e);
        res.json({ 'msg': 'error warning' + e });
    }
});

app.post("/addusers", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send("1 grade Class2 well done");
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`server's running http://localhost:${PORT}.`);
});
