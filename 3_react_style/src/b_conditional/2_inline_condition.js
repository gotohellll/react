
/* 

    [1] && 연산자 -> if문과 동일한 효과

        true  && expression => expression이 중심
        false && expression => false가 중심

    [2] 삼항연산자 -> if~else와 동일한 효과

        조건 ? 참일경우 : 거짓인경우

*/

import { useState } from "react";

function Counter(props){

    const [count, setCount] = useState(0);

    return (
        <div>
            { count && <h3>현재 카운트: {count}</h3>} {/* 처음 화면 랜더링 시 count 0 (초기값이 0이여서 false), 버튼누르면 값 증가하면서 0이외의 숫자 true*/ }
            <hr/>
            <button onClick={()=>{setCount((count)=>count+1)}}>버튼</button>
        </div>
    )
}

function MailBox(props){

    const unreadMessage = props.data;

    return(
        <div>
            <h1>나의 메일 함</h1>
            {
                unreadMessage.length > 0 && 
                    <h3>
                        현재 {unreadMessage.length}개의 읽지 않은 메세지가 있습니다
                    </h3>
            }
        </div>
    )
}

function App(){
    var msg =[]
    var msg2 = ['광고메일', '회의메일','안부메일']

    return(
        <div>
            <Counter></Counter>
            <Counter></Counter>
            <hr/>
            <MailBox data={msg}></MailBox> {/* 빈 배열이 넘어가 length가 0 = false */}
            <MailBox data={msg2}></MailBox> {/* length가 3 = true , 문자열 출력 */}
        </div>
    )
}

export default App;