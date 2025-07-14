
/* 
    컴포넌트의 랜더링 막기
        => return null


*/

import '../App.css'

import { useState } from 'react';

let Banner = (props)=>{

    if(!props.show) return null;
    return <div className='App-header'>광고</div>
}

let MainPage = (props)=>{

    const [show, setShow] = useState(false);
    // 이 변수의 show가 아래 show로 들어감 

    return <div>
        {/* <button onClick={()=>setShow(!show)}>{show? '감추기':'보이기'}</button> */}
        <button onClick={()=>setShow((show)=>!show)}>{show? '감추기':'보이기'}</button>
        <Banner show={show}></Banner>
        <hr/>
    </div>
}

export default MainPage;