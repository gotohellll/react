
/* 
    useRef()

        [1] useRef()로 리턴받은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
            -> ref객체가 변경되더라도 랜더링 되지 않음 
                그러나 useState() 변수의 랜더링이 일어나면 화면의 값이 변경됨 

        [2] 브라우저 DOM 요소에 직접 접근 가능 


*/

import { useState, useRef } from "react"

const App = () => {
    // useState() 
    const [realname, setRealname] = useState('홍길동')

    // useRef() 
    const refNickname = useRef('산적')

    return(

        <div>
            <h2>데이터 상태</h2>
            <div>
                <span>본명 : {realname}</span>
                <input type="text" onChange={ (e)=>{setRealname(e.target.value)} }></input>
                {/* => 타이핑 할때마다 화면을 계속 갱신 */}
            </div>
            <div>
                 <span>별명 : {refNickname.current}</span> {/*ref변수는 해당하는 현재값이라고 current써야함 */}
                <input type="text" onChange={(e)=>{refNickname.current = e.target.value}}></input>
                {/* => 값은 바뀌지만 화면 갱신이 일어나지 않음 : 다른 요소가 새로 랜더링될때 값이 갱신됨  */}
            </div>
        </div>

    )
}

export default App