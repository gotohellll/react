
// [1] 논리연산자 결합

let arr = ['one','two'];
let first = arr[0];
let third = arr[2];

console.log(first); //'one'
// console.log(second); // error발생 : second is not defined
console.log(third); // undefined (존재하지 않는 값)

// 논리연산자 결합 
console.log(first||'empty'); // one  => or연산자 둘다 true여야 함 => first가 true , 중심 
//first를 봤을때 이미 값이 존재하여 true , empty를 볼 필요가 없음 => first의 값 one 출력
console.log(third||'empty'); // empty => 'empty'가 중심 
// third를 봤을때 값이 없어 false => empty값을 확인하여 true 

// [2] 삼항연산자와 truthy, falsy
// let truthy = true; //참
// let truthy = 1;    // 0이 아닌 모든 숫자는 true 
// let truthy = -1;   //참
// let truthy = '0';  //문자 0은 참 
// let truthy = false; //거짓
// let truthy = 'false'; //문자열이면 참 
//네트워크를 타고왔을때 문자열로 변경되는 경우가 있어 수시로 자료형 확인 

// let truthy = []; // 자바스크립트에서 빈 배열은 참 
// let truthy = {}; // 빈 객체도 참 => 빈 배열도 빈 객체도 메모리에 올라왔기 때문에 참 (메모리에 존재하는지 하지않는지 여부)

// let samhang = truthy? "참" : "거짓";
// console.log(`Truthy: ${samhang}`);

// let falsy = false; //거짓
// let falsy = 0; // 거짓
// let falsy = ''; // 빈 문자열은 거짓 
// let falsy = null; //거짓
// let falsy = undefined; //거짓
// let falsy = NaN; //거짓 (자바에서 NaN은 Not a number / python에서는 결측치)


// let samhang = falsy?'참':'거짓';
// console.log(`falsy: ${samhang}`);

// [3] 요소 분해
let list = [100,200, 300];
let [item1, item2, item3=1004] = list;
console.log(item1); //100
console.log(item2); //200
console.log(item3); //값이 없으면 undefined, 디폴트값 지정하면 1004, 디폴트값이 있음에도 값이 있으면 넘어온값 우선 300

//스와핑 (자바는 임시변수 만들어 삼각형 형태로 변경)
[item2, item1] = [item1, item2];
console.log(item1); //200
console.log(item2); //100

// [4] 전개연산자(...)
let objOne = {hana:1, dul:2, gita:0};
let objTwo = {sam:3, sa:4, gita:-1};
// 객체 합치기
let old_combined={
    hana:objOne.hana
    ,dul:objOne.dul
    ,gita:objOne.gita
    ,sam:objTwo.sam
    ,sa:objTwo.sa
    ,gita:objTwo.gita
};

console.log(old_combined); //{ hana: 1, dul: 2, gita: -1, sam: 3, sa: 4 }
//gita가 나중에 들어온 값으로 덮어씌워짐 

let new_conbined = {...objOne, ...objTwo};
console.log(new_conbined); //{ hana: 1, dul: 2, gita: -1, sam: 3, sa: 4 }
//같은 결과 
// ... 전개연산자를 쓰면 내부 항목을 알아서 접목시켜줌 

// ***** 전개연산자의 활용 1
// 한 객체 안에서 특정 부분만 뽑을 수 있음 (하나만 뽑고 나머지를 걸러내고 싶을때)
let {gita, ...others} = new_conbined;
// let {gita, hana, ...others} = new_conbined; //두개도 뽑힘 
console.log(gita); // -1
// console.log(hana); // 1

console.log(others); //{ hana: 1, dul: 2, sam: 3, sa: 4 }



let origin = {name:'홍길동', age:22, dept:'IT'}; //100번지 주소값
let temp = origin; //같은 주소 공유 100번지
temp.name = '이순신';
console.log(temp); // name:이순신
console.log(origin); // name:이순신 => 주소를 공유해 원본 변경함 

// ***** 전개연산자의 활용 2
let origin2 = {name:'홍길동', age:22, dept:'IT'}; 
let temp2 = {...origin2, name:'이순신'}; 
console.log(temp2); //name:이순신
console.log(origin2); //name:홍길동 => 전개연산자를 쓰면 복사본만 변경 