
// 엘리먼트 변수 : 엘리먼트를 변수에 저장(지정)

import { useState } from "react"

const LoginButton = (props)=>{
    return <button onClick={props.onClick}>로그인</button>
    // 아래 설정한 onClick 속성값을 받음 => 진짜 onClick이벤트 
}

const LogoutButton = (props)=>{
    return <button onClick={props.onClick}>로그아웃</button>
}

const LoginControl = (props)=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let btn;

    
    if(isLoggedIn) {
        btn = <LogoutButton onClick={()=>{setIsLoggedIn(false)}}/>
        // onClick이벤트가 아닌 속성값 이름 
    }else{
        btn = <LoginButton onClick={()=>{setIsLoggedIn(true)}}/>
    }

    return btn;
}

const App = ()=>{
    return <LoginControl/>
}

export default App;
