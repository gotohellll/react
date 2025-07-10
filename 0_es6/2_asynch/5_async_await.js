
async function init(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
    // fetch자체는 비동기인데 나머지는 비동기가 아님 => 함수앞에 async를 붙여 통으로 비동기로 만듦
    // fetch가 끝나는걸 기다려주기 위해서 await 붙임 
    const users = await response.json(); //then을 쓰던지, await를 씀 
    //then : fetch에 의한 결과만 처리할 때 then (갔다온 다음에 처리 ) 
    //함수를 통으로 비동기로 만들기 위해 async , 끝나고 나서 결과처리를 하기 위해 await (끝날때까지 기다림 )

    users.forEach( user => {
            console.log(`${user['name']} : ${user['address']['city']}`); 
        })
}

init();

console.log('다른 작업중');