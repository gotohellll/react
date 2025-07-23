
const a = 3 + []
console.log(a) // 3+ 배열 : 3

const b = 3 + null
console.log(b) // 3+ null : 3 

// ==> 자바스크립트 결과 예측이 힘듦

// node src/0_basic/js_type.js


/* 

[java]
    System.out.print('2'-1); // 49 => 문자는 아스키코드로 변환되어 연산 '2' == 50

[python]
    print('2'-1)            // error => str 과 int 끼리 연산 불가

[javascript]
    console.log('2'-1)      // 1 

[typescript]
    console.log('2'-1)      // error => 자료형을 명확하게 사용해야 함 

*/