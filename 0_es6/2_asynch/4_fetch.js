// fetch 비동기통신 

fetch("https://jsonplaceholder.typicode.com/users")//url을쓰면 접속해 갔다옴 => 나중에 직접만든 사이트 입력 
    // .then(response => {console.log(response.users)}); //갔다온다음에(then) 결과 받아야함 (fetch를 통해 결과 받는 변수 response설정)
    // response객체를 json으로 바꿔줘야함 
    // .then( response => {response.json()} )  // 중괄호 있으니까 안뜸 => return이 없었어서                          [1] 잘못코딩 *****
    // .then( response => { return response.json()} )  // 중괄호 있으려면 return이 있어야함                          [2] 올바른코딩
    .then( response => response.json() ) //json으로 변환한 내용을  //중괄호 없음 => return밖에없을때 중괄호 생략가능     [3] 축약형 ******
    .then( users=>{ 
        // console.log(users); 
        users.forEach( user => {
            // console.log(user); //json구조로 출력 
            // console.log(user.name); //name만 출력
            // console.log(user['name']); //name만 출력하는 동일 코딩 
            console.log(`${user['name']} : ${user['address']['city']}`); 
        })
    } ) //users변수에 받음 

console.log('다른 작업 중'); //네트워크에 갔다오는동안 다른 작업도 실행해야함 
// 네트워크가 느리면 먼저 실행됨 

/* 

다른 작업 중 => 먼저 출력

console.log(users);결과 
[ => 배열형태
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz', 
*/