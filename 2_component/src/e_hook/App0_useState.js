
/* 
    useState() : state 생성하는 함수 (값을 변경하는 변수를 관리)
                    state : 값을 변경하여 렌더링 되는 변수 
*/

import { useState } from "react";

const App = ()=>{

    const [msg, setMsg] = useState('인사말을 입력하세요');

    return(
        <div>
            <input type='text' onChange={(e)=>{setMsg(e.target.value)}}></input>
            <br/>
            <div>입력메세지 : {msg}</div>
        </div>
    )
}

//회원가입 입력값을 받는 모든 변수는 useState()를 사용해 변수선언해야함 

export default App;