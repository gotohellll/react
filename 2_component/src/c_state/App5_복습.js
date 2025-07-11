

// 함수형 컴포넌트로 만들기 

import { useState } from "react"

let FuncComp = ()=>{
    let [number, setNumber] = useState(0)

    return(
        <div>
            <p> 값 : {number}</p>
            <input type="button" value='+' onClick={
                function(){
                setNumber(number+=1)
            }
            }></input>
            <input type="button" value='-' onClick={()=>{
                setNumber(number-=1)
            }}></input>
        </div>

    )
}

export default FuncComp