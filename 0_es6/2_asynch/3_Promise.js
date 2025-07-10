
//새로나온 문법 스타일

const likeCoffee = true;

const coffee = () => {
    return new Promise((resolve, reject)=>{//Promise 클래스 (클래스 안에 함수(resolve, reject)를 인자로 받음 ) : 기본적인 인자 2개 
        if(likeCoffee) resolve('커피를 주문한다');
        else reject('주문하지 않는다');
    }); 
};

function order(message){
    console.log(message);

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('커피를 포장합니다');
        },2000);
    })
}

coffee()
    .then(result=>order(result)); //화살표 함수 (인자1개 괄호생략, 리턴값만 있어 중괄호생략)
//coffee호출 -> Promise반환 

console.log('다른 작업 가능');
/* 
다른 작업 가능
커피를 주문한다
커피를 포장합니다
 */



/* 
    function coffee(){

    }
 */