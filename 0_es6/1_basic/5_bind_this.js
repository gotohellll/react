
// [1] 

var obj = {result:0};
obj.add = function(x,y){ //obj객체에 메서드로 add함수추가
    this.result = x + y; //this는 obj를 가리킴 
    // console.log(this)
};
obj.add(2,3);

console.log(obj); //{ result: 5, add: [Function (anonymous)] }
console.log(obj.result); //5
console.log('1>-----------');
// 메서드로 호출할 때만 this가 obj를 가리킴 

/* 
var obj = {
    result : 0
    , add : function(){}
}
 */

var obj = {};
var add = function(x,y){
    this.result = x + y;
}
add = add.bind(obj); //연결 => add함수의 this를 항상 obj로 고정 
add(2,3);
console.log(obj); //{} , 연결 후 { result: 5 }
console.log(obj.result); //undefined, 5 
console.log('2>-----------');
// bind로 this를 obj에 고정시켜 어떻게 호출해도 this는 obj 


// [2] 
// 중첩함수인 경우 (함수안의 함수)
// bind없이 inner 함수 호출 
var obj = {result : 0};
obj.add = function(x,y){
    function inner(){
        this.result = x+y;
        // console.log('inner:'+this) //[object global]
    }
    inner();
    // console.log('add:'+this) //[object Object]
}
obj.add(2,3); //이 코딩 실행 시
/* 
    1. add함수 실행
    2. add함수 안에서 inner()호출
    3. inner함수는 일반 함수로 호출 
    4. inner함수의 this는 전역객체 , obj와 무관함 
 */
console.log(obj); //{ result: 0, add: [Function (anonymous)] }
console.log(obj.result); //0
console.log('3>-----------');



// bind로 inner의 this를 obj에 연결 
var obj = {result : 0};
obj.add = function(x,y){
    function inner(){
        this.result = x+y;
        // console.log('inner:'+this) //[object Object]
    }
    inner = inner.bind(this); // 연결 
    inner();
    // console.log('add:'+this) //[object Object]
}
obj.add(2,3);

console.log(obj);  //{ result: 5, add: [Function (anonymous)] }
console.log(obj.result); //5
console.log('4>-----------');

// add의 this와 inner의 this가 같아야 값이 바뀜 

// [3] 화살표 함수 : 화살표 함수는 자신만의 this가 없고, 외부(여기선 add)의 this를 그대로 사용
var obj = {result : 0};
obj.add = function(x,y){
    const inner =() =>{ 
        this.result = x+y; 
        // console.log('inner:'+this) //[object Object]
        }
    inner();
    // console.log('add:'+this) //[object Object]
}
obj.add(2,3);

console.log(obj); //{ result: 5, add: [Function (anonymous)] }
console.log(obj.result); //5
console.log('5>-----------');