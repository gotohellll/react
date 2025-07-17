
import { useState } from 'react'
import './temp.css'

const FancyBorder = props =>{ //최하위 출력 컴포넌트
    return(
        <div className='FancyBorder'>
            {props.children}
            {/* children으로 부모 컴포넌트의 자식 태그를 모두 가져옴 */}
        </div>
    )
}

const TextPart = props =>{ //매개체 컴포넌트
    return(
        <FancyBorder>
            <h1>{props.title}</h1>
            <hr/>
            <p>{props.message}</p>
            {/* 여기에 부모컴포넌트에서 받아서 자식 컴포넌트로 보내기 */}
            {props.children}
        </FancyBorder>
    )
}

const WelcomDialog = props =>{
    return <TextPart title="환영합니다" message="오늘도 행운"/>
}

const MorningDialog = props =>{ 
    const [nickname, setNickname] = useState('');

    return (<TextPart title="좋은아침" message="행복하세요">
        <input type='text' value={nickname} onChange={(evt)=>{setNickname(evt.target.value)}}/>
        <br/>
        <button onClick={(evt)=>{alert(`어서오세요 ${nickname}`)}}>입력</button>
    </TextPart>
    )
}

const App = ()=>{
    return(
        <div>
            <WelcomDialog/>
            <hr/>
            <MorningDialog/>
        </div>
    )
}

export default App
