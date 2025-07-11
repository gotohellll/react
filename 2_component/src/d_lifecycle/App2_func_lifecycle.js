
import { useEffect, useState } from "react";

let FuncComp = ()=>{

    let [number, setNumber] = useState(0)

    // 클래스 컴포넌트 componentDidMount / componentDidUpdate / componentWillUnMount 
    // 함수형 컴포넌트 ==> useEffect()
    useEffect(function(){
        console.log('useEffect() 호출') //어느시점에 불려지는지 확인 
        // 맨 처음 화면 불려질때 호출, '눌려' 버튼 누를때마다 호출 

    })

// use로 시작하는 함수 : hook이라고 부름 
// 성능을 위해 만든 함수 

    return (
        <div>
            <h3> 함수형 컴포넌트 </h3>
            <p> Number : { number } </p>
            <input type='button' value='눌려' onClick={ function(){
                setNumber(Math.round(Math.random()*100))
            } }></input>
        </div>
    )
}

export default FuncComp;