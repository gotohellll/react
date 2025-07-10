

// 문자열을 받아 객체 형식(json)으로 풀어쓰기 
// [0] 기존 자바스크립트
/*
var queryString = 'kind=it&title=python&cnt=3';

var chunks = queryString.split('&'); // &를 중심으로 배열로 쪼개줌 
// console.log(chunks); //[ 'kind=it', 'title=python', 'cnt=3' ]

var result = {};
for(var i=0; i<chunks.length; i++){
    var parts = chunks[i].split('=');
    // console.log(parts);
    // 0번째 종류 , 1번째 값
    var key = parts[0];
    var value = parts[1];
    result[key]=value;
}

console.log(result); //{ kind: 'it', title: 'python', cnt: '3' }
*/

// [1] forEach()
/* 
var queryString = 'kind=it&title=python&cnt=3';
var chunks = queryString.split('&'); 
var result = {};

chunks.forEach((chunk)=>{ //화살표 함수 사용 
    const [key, value] = chunk.split('=');
    result[key] = value;
})

console.log(result); //{ kind: 'it', title: 'python', cnt: '3' }
 */

// [2] map() : 리턴값을 받을 수 있음 
var queryString = 'kind=it&title=python&cnt=3';
var chunks = queryString.split('&'); 
var result =chunks.map((chunk)=>{ //chunk는 매개변수 { ... }는 함수의 본문
    const [key, value] = chunk.split('=');
    return {key, value};
});

console.log(result); 
/* 
[
  { key: 'kind', value: 'it' },
  { key: 'title', value: 'python' },
  { key: 'cnt', value: '3' }
] 
*/