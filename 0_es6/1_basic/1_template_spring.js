/*
    변수 선언
        - var
        - let   : 재선언 불가
        - const : 재설정 불가 (값변경 불가)
*/

let msg_a = '안녕하세요';
let msg_b = "반갑습니다";

let old_msg = msg_a + " " + msg_b;
let new_msg = `${msg_a} ${msg_b}`;
console.log(old_msg);
console.log(new_msg);

const num1=100;
const num2=200;

// 100 * 200 = 20000 출력 형식
console.log(`${num1} * ${num2} = ${num1*num2}`)

