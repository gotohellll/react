
/* 
    useMemo

        ` 성능 개선을 위해서 리턴값을 캐싱 cache (메모리에 저장해두어 성능속도 향상)
        ` 일반적인 경우 많이 사용하진 않고, 잘못하면 오히려 성능저하 야기 

    리턴변수 = useMemo(func, [변수]) //리턴변수는 캐시에 잡아두어 변수가 불릴때마다 바로 불러 사용 
*/

import { useState, useMemo } from "react";

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

    const onChange = (evt)=>{ setNum(evt.target.value) }
    const onInsert = ()=>{
        list.push(parseInt(num)) // 입력받은 값을 list에 저장 /  num 초기값이 문자열이라 형변환
        console.log(list)
        // setList(list)
        setList([...list])
        setNum('') //다시 공백 처리
    }

    //------------------------------
    const result = useMemo(()=>getCalc(list),[list]) //list가 변경될때만 호출

    return(
        <div>
            <input type='text' value={num} onChange={onChange}></input>
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