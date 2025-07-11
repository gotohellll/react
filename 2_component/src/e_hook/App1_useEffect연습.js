
import { useEffect, useState } from 'react'
import '../App.css'

const Clock = () => {
    const [nowTime, setNowTime] = useState(new Date().toString())

    useEffect(()=>{

        const handle = setInterval(()=>{ //1초마다 아래 함수식 실행
            console.log(`째깍\n`) //화면에 안보일때도 계속 실행하고 있음 
            setNowTime(new Date().toString())
        },1000) 

        return ()=>{clearInterval(handle)} // 화면에 안보이면 멈추게함 => 언마운트 

    },[]) // 빈 배열 사용 => 화면 랜더링 시에만 호출 

    return(
        <div className='App-link'>
            <h4>{nowTime}</h4>
        </div>
    )
}

const App = () => {

    const [isClockVisible, setIsClockVisible] = useState(false)

    return(
        <div className='App-header'>
            <h2>시계놀이</h2>
            <button onClick={()=>{setIsClockVisible(!isClockVisible)}}>눌려</button>
            <hr/>
            {isClockVisible?<Clock/>:''}
        </div>
    )
}

export default App;