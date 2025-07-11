
/* 
    # hook
        ` 함수형 컴포넌트에서만 호출 가능 (일반 함수에서 x)    
        ` 반복문이나 중첩함수 안에서 호출 불가능 

    # useEffect()

        ` 클래스형 컴포넌트의 lifecycle() 함수의 기능 수행
            -> componentDidMount           / componentDidUpdate / componentWillUnMount 와 동일한 기능 수행 
            마운트가 된 후(화면이 처음 로딩)   / 화면의 값이 변경      / 화면에서 사라지는 순간

        ` useEffect(이벤트함수, 의존성배열)

            - 의존성 배열이 없는 경우 : 컴포넌트가 업데이트 될 때마다 호출 
            - 의존성 배열이 있는 경우 : 배열의 값이 변경될 때마다 호출
            - 의존성 배열이 빈 배열인 경우 : 렌더링될 때 호출됨 
*/

import { useEffect, useState } from "react";

function Form(){
    const [realname, setRealname] = useState('A')
    const [nickname, setNickname] = useState('B')

    //의존성 배열이 없을때 
    // useEffect(()=>{
    //     console.log(`본명 : ${realname} \t 별명 : ${nickname} \n`)
    //     // 화면 로딩될때, 값 변경될때마다 호출
    // })

    //의존성 배열이 있을때 
    // useEffect(()=>{
    //     console.log(`본명 : ${realname} \t 별명 : ${nickname} \n`) 
    // },[nickname]) // nickname이 변경될때만 호출 

    //의존성 배열이 빈 배열일때
    // useEffect(()=>{
    //     console.log(`본명 : ${realname} \t 별명 : ${nickname} \n`) 
    // },[]) // 처음 단 한번 호출되고, 값 변경될때 호출되지 않음 => 주로 서버로부터 넘겨받은 값을 초기화할때 사용 
    
    //componentWillUnMount => return이 있을때 언마운트 
    useEffect(()=>{
        console.log(`본명 : ${realname} \t 별명 : ${nickname} \n`) 

        return() => console.log('>>>> Form 컴포넌트가 언마운트')
    },[])  

    return(
        <div>
            <div>
                <span>본명 : {realname}</span>
                <input type='text' value={realname} onChange={(evt)=>{setRealname(evt.target.value)}}></input>
            </div>

            <div>
                <span>별명 : {nickname}</span>
                <input type="text" value={nickname} onChange={(evt)=>{setNickname(evt.target.value)}}></input>
            </div>
        </div>
    )
}
//onChange가 없으면 read-only가 됨 (입력불가) => You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.

function App(){

    const [isVisible, setIsVisible] = useState(true);
    // isVisible: 현재 Form이 보이는지 안 보이는지를 나타내는 boolean 상태
    // 초기값은 true로 설정되어 Form이 처음에는 보이는 상태

    return(
        <div>
            <button onClick={()=>{setIsVisible(!isVisible)}}>{isVisible?'Hide':'Show'}</button>
            <hr/>
            { isVisible && <Form/> }
            
        </div>   
    )
    // !isVisible: 현재 상태의 반대값으로 변경

    // isVisible && <Form/>
    // isVisible이 true일 때만 <Form/> 컴포넌트를 렌더링
    // isVisible이 false면 아무것도 렌더링하지 않음

/* 
1. isVisible이 true인 경우

첫 번째 값(true)을 확인
true이므로 두 번째 값(<Form/>)도 확인
결과: <Form/> 컴포넌트가 렌더링됨

2. isVisible이 false인 경우

첫 번째 값(false)을 확인
false이므로 두 번째 값은 확인하지 않음 (단락 평가)
결과: false가 렌더링됨 (React에서 false는 아무것도 렌더링하지 않음)

 */
}

export default App;
