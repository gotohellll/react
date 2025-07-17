
/* 
    제어 컴포넌트 : 입력값이 state나 props에 의해 제어되는 컴포넌트
                    -> 리엑트의 이벤트 핸들러를 이용하여 상태를 변경하고 화면의 값이 변경

    비제어 컴포넌트 : 입력값이 state나 props에 의해 제어되지 않기 때문에 수정된 값이 상태값으로 변경불가
                    => HTML DOM에 직접 접근해야 함

*/

import { useRef, useState } from "react"

const App = ()=>{

    // HTML DOM 직접 접근하기 위해 useRef 사용
    const elemX = useRef(null); //값이 아닌 연결하기 위한 것 
    const elemY = useRef(null); //값이 아닌 연결하기 위한 것 

    const [result, setResult] = useState(0);

    const add = ()=>{
        setResult(parseInt(elemX.current.value)+parseInt(elemY.current.value)) 
    }

    return(
        <div>
            <h2>비제어 컴포넌트</h2>
            X값 : <input type="text" ref={elemX}></input><br/>
            Y값 : <input type="text" ref={elemY}></input><br/>
            <hr/>
            {/* 화면 갱신하기 위한 요소가 반드시 필요 */}
            <button onClick={add}>계산기</button>
            결과 : {result}
        </div>
    )
}


export default App