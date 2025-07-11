
import { useState } from "react"

let FuncComp = () => {

    let [number, setNumber] =useState(0)

    return(
        <div>
            <h3>함수 컴포넌트</h3>
            <p>숫자 : {number}</p>
            <hr/>
            <input type='button' value='확인1' onClick={()=>{
                setNumber(Math.ceil(Math.random()*100))
            }}></input>
            <input type='button' value='확인2' onClick={()=>{
                setNumber(Math.ceil(Math.random()*100))
            }}></input>
        </div>
    )
}

export default FuncComp