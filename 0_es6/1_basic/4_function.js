
// [1] function 명령어
function func1(first, second){
    return first + second;
}

// [2] function literal(변수값)
let func2 = function(first, second){
    return first + second;
};

// [3] arrow function
let func3 = (first, second)=>{return first + second};
//인자가 하나면 소괄호 생략가능


//리턴만 있을경우 중괄호와 return 생략가능
let func4 = (first, second) => first + second;

console.log(func1(1,2));
console.log(func2(1,2));
console.log(func3(1,2));
console.log(func4(1,2));

class MyClass{
    value = 10;
    //생성자함수
    constructor(){

        var func2_add = function(first, second){
            return this.value+first+second;
        }.bind(this); //바인딩해서 연결해야 value 참조할 수 있음 

        console.log(`확인2: ${func2_add(1,2)}`);

        var func3_add = (first, second) => this.value+first+second;
        //화살표 함수를 쓰면 바인딩을 하지 않아도 value 참조 가능 *****
        console.log(`확인3: ${func3_add(3,4)}`); 
    }
}

var my = new MyClass();