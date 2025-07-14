
import { useState } from "react";

function MemberGreeting(props){

    return <h1>오늘도 반갑습니다</h1>
}

function GuestGreeting(props){
    return <h2>회원가입을 해주세요</h2>
}

function Greeting(props){

    // const isLoggedIn = true;
    // const isLoggedIn = false;

    // false == NaN == undefined == null 

    // const isLoggedIn = ''; // false
    // const isLoggedIn = []; // true
    // const isLoggedIn = {}; // true
    // const isLoggedIn = 0; // false
    // const isLoggedIn = -1; // true
    // const isLoggedIn = 1; // true

    const isLoggedIn = props.isLoggedIn; // 상위 컴포넌트 App에서 isLoggedIn 값을 가져와야함 


    
    if(isLoggedIn) return <MemberGreeting/>
    else return <GuestGreeting/>
}

function App(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // [추가작업] '변경'버튼을 클릭하면 Greeting 컴포넌트 안에 isLoggedin의 값을 변경하여 컴포넌트 변경 
    return (
        <div>
            {/* <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>변경</button> */}
            <button onClick={()=>{setIsLoggedIn((isLoggedIn)=>!isLoggedIn)}}>변경</button>
            <hr/>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default App;
