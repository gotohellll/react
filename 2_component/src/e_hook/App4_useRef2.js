
/* 

**** hook
    -> 함수형 컴포턴트에서만 특정 기능을 지원하기 위해 만들어진 함수
    -> useXXXX() (use로 시작하는 함수)

    ` useState() : 값을 변경하는 변수
    ` useEffect(): 생명주기 관리 

    ` useMemo

        ` 성능 개선을 위해서 리턴값을 캐싱 cache (임시메모리에 저장해두어 성능속도 향상)
        ` 일반적인 경우 많이 사용하진 않고, 잘못하면 오히려 성능저하 야기 

    리턴변수 = useMemo(func, [변수]) //리턴변수는 캐시에 잡아두어 변수가 불릴때마다 바로 불러 사용 

    ` useCallback()
        - 주로 랜더링 성능을 최적화해야 하는 상황에 사용 -> 잘못하면 오히려 성능저하 야기 
        - useMemo()와 유사

            useMemo()       -> 캐싱의 대상이 함수의 리턴값
            useCallback()   -> 캐싱의 대상이 컴포넌트 내부의 함수 (자주 사용하는 함수를 useCallback에 넣어 성능향상)

    ` useRef()

        [1] useRef()로 리턴받은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
            -> ref객체가 변경되더라도 랜더링 되지 않음 
                그러나 useState() 변수의 랜더링이 일어나면 화면의 값이 변경됨 

        [2] 브라우저 DOM 요소에 직접 접근 가능 

*/

import { useState, useMemo, useCallback, useRef } from "react";

// 일반 함수
const getCalc = (nums)=>{
    console.log(`계산중..... : ${nums}`)
    if(nums.length === 0) return 0;

    //  reduce : [1,2,3,4,5] => (1,2) => (앞의 결과값, 3) => (앞의 결과값, 4) => (앞의 결과값, 5)
    const sum = nums.reduce((a, b)=> a+b)
    return sum;
} 


// 컴포넌트 함수
const Average = ()=>{
    const [list, setList]  = useState([])
    const [num, setNum]    = useState('')

    const inputEL = useRef(null); //실질적인 DOM을 건드릴 수 있는 변수. 이 변수로 브라우저 DOM을 컨트롤 

    // const onChange = (evt)=>{ setNum(evt.target.value) }
    // ***********useCallback()함수 ****
    const onChange = useCallback((evt)=>{ 
        setNum(evt.target.value) 
    },[])

    // const onInsert = ()=>{
    //     list.push(parseInt(num)) // 입력받은 값을 list에 저장 /  num 초기값이 문자열이라 형변환
    //     console.log(list)
    //     // setList(list)
    //     setList([...list])
    //     setNum('') //다시 공백 처리
    // }

    const onInsert = useCallback(()=>{
        list.push(parseInt(num))
        console.log(list)
        // setList(list)
        setList([...list])
        setNum('')

        // 값 입력 후 input태그로 다시 포커스 
        inputEL.current.focus();
    },[num, list])

    //------------------------------
    const result = useMemo(()=>getCalc(list),[list]) //list가 변경될때만 호출

    return(
        <div>
            <input type='text' value={num} onChange={onChange} ref={inputEL}></input>
            {/* 값 입력 후 input태그로 다시 포커스 되도록. ref => useRef변수 선언한 뒤 input태그와 관계 맺어줌  */}
            <button onClick={onInsert}>등록</button>
            <hr/>
            <div>
                <ul>
                    {
                        list.map((item, idx)=>{
                            return <li key={idx}>{item}</li>
                        })
                        // list.map((item, idx)=> <li key={idx}>{item}</li> ) //리턴 하나면 중괄호/return 생략 
                    }
                </ul>
            </div>
            <hr/>
            <div>
                {/* getCalc함수에 list 넣기 , 콘솔에 결과값 4번씩 출력*/}
                {/* 
                결과값 : {getCalc(list)}<br/>
                결과값 : {getCalc(list)}<br/>
                결과값 : {getCalc(list)}<br/>
                결과값 : {getCalc(list)}<br/> 
                */}

                {/* useMemo사용하면 콘솔에 한번씩만 출력됨  */}
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
            </div>
        </div>
    )
}

export default Average;