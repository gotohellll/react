

// npm install express mysql cors
//설치한 패키지 가지고와서 변수에 담음
const express = require('express')
const app = express();

const mysql = require('mysql')
const dbconfig = require('./config/database.js') 
const conn = mysql.createConnection(dbconfig) //dbconfig안에있는 정보를 넘겨서 연결

const cors = require('cors')

// [1] 웹서버 구동하기
// 포트 변경
const PORT = 8000;

// 클라이언트가 서버 불러올때까지 기다림 PORT번호로 서버불러서 함수식 실행 
app.listen(PORT, ()=>{
    console.log('EXPRESS 서버 시작:'+ PORT)
});

// [2] DB 연결
conn.connect((err)=>{ //정상적이면 인자 x , 에러발생하면 에러가 인자로 들어옴

    if(err) console.log('연결실패:', err)
    else console.log('연결성공');
})

//서버 시작 : node server_start.js , 서버 종료 : ctrl + c

app.use(cors()) //cross origin문제 해결

// [1] 전체 검색
// 어떤 url이 들어오면 함수가 불려짐
// app에서는 항상 request객체와 response객체가 인자로 들어옴
app.get('/api/get',(req, res)=>{
    //테이블 생성시 소문자 썼다면 소문자로 입력 **상시 변하니 확인 
    const sql = "SELECT bnum, btitle, bname, mid,  date_format(insertdate, '%Y-%m-%d') insertdate "
                + " FROM node_board ";

                //sql 쿼리를 데이터 베이스로 보내고 갔다올때 함수가 불려짐(callback함수)
    conn.query(sql, function(err, result, fileds){ //에러, 결과 , (?)가 인자로 들어옴
        if(err) throw err; // 에러가 오면 throw
        console.log(result) //정상적이면 콘솔로 결과 확인
        res.send(result) //화면으로 결과를 보냄 
    })
})

//서버 시작 후 브라우저 http://localhost:8000/api/get 에서 확인가능 

// [2] 입력
app.use(express.json())

app.post('/api/insert', (req, res)=>{
    console.log(req.body);
    //값을 변수에 담아서
    const btitle = req.body.btitle;
    const bname = req.body.bname;
    const bcontent = req.body.bcontent;
    const mid = req.body.mid;
    const bpw = req.body.bpw;

    //배열로 처리
    const param = [btitle, bname, bcontent, mid, bpw];

    const sql = "INSERT INTO node_board(btitle, bname, bcontent, mid, bpw, insertdate, updatedate)  "
                +"  VALUES(?,?,?,?,?,now(), sysdate())";
    
                //오라클은 sysdate에 함수표시하면 x

    //sql문장에 param을 같이 보냄 
    conn.query(sql, param, function(err, result, fileds){
        if(err) throw err
        console.log('입력성공',result)
        res.send('success') //화면에 success출력 
    })
}); 

// postman에서 확인

// [3] 상세보기
app.get('/api/edit/:bnum', (req, res)=>{
    //파라미터값 받기
    const bnum = req.params.bnum;
    console.log('bnum>>>', bnum)

    const sql = "SELECT bnum, btitle, bname, bcontent, mid, bpw,     "
                +" date_format(insertdate, '%Y-%m-%d')  insertdate,  "
                +" date_format(updatedate, '%Y-%m-%d')  updatedate   "
                +" FROM node_board                                   "
                +" WHERE bnum=?                                      ";

    // bnum이 하나여도 배열형식으로 
    conn.query(sql, [bnum], function(err, result, fileds){
        if(err) throw err
        console.log('상세보기성공',result)
        res.send(result) // 배열 안 객체형식으로 들어옴 
    })

})


// [4] 삭제
app.delete('/api/delete/:bnum', (req, res)=>{
    const bnum = req.params.bnum;
    console.log('bnum>>>', bnum)

    const sql = "DELETE FROM node_board "
                +" WHERE bnum=?         ";

    conn.query(sql, bnum, function(err, result){
        if(err) throw err
        console.log('삭제성공')
        res.send('success')
    })

})

// [5] 수정
app.post('/api/update/:bnum',(req, res)=>{
    const bnum = req.params.bnum;
    const btitle = req.body.btitle;
    const bname = req.body.bname;
    const bcontent = req.body.bcontent;
    const mid = req.body.mid;
    const bpw = req.body.bpw;
    const param = [btitle, bname, bcontent, mid, bpw, bnum];
    console.log('bnum>>>', bnum)

    const sql = "UPDATE node_board "
                +" SET btitle=?, bname=?, bcontent=?, mid=?, bpw=?, insertdate=now(), updatedate=now() "
                +" WHERE bnum=?"

    conn.query(sql, param, function(err, result){
        if(err) throw err
        console.log('수정성공', result)
        res.send(result)
    })
})

