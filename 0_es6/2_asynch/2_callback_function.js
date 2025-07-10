// 비동기 방식 
function order(coffee, callback){ //callback : 불려지는 함수라는 뜻에서 callback이라고 지칭 
    //19라인 '카페라떼' => coffee, pickup함수 => callback 
    console.log(`${coffee} 주문`);
    setTimeout(()=>{
        callback(coffee);
    }, 2000); // 지정한 시간에 단 한번 함수 호출 : setTimeout(함수, 시간)
    //pickup함수를 2초 뒤에 호출 

    // setInterval(() => { //지정한 시간 마다마다 함수 호출
        
    // },  );
}

function pickup(result){
    console.log(`${result} 준비 완료`)
}

order('카페라떼',pickup);

console.log('다른 작업가능');
/* 
카페라떼 주문
다른 작업가능 -> 먼저 수행된 뒤
카페라떼 준비 완료 -> 2초 뒤에 callback 실행 
 */
