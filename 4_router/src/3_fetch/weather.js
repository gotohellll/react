

import { useEffect, useState } from 'react';
import '../App.css'

const App = ()=>{
    const [temp, setTemp] = useState('');
    const [desc , setDesc] = useState('');
    const [humidity, setHumidity] = useState('');

    const [isReady, setIsReady] = useState(false);

    //비동기 통신을 위해 async 
    const getData = async ()=>{
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then(result=>result.json()) //response객체로 얻어오기때문에 json구조로 변경
            .then(jsonresult=>{
                // console.log(jsonresult)
                // console.log(jsonresult.weather[0].main)
                // console.log(jsonresult.main.temp)

                // 1-1 변수에 값을 지정 
                setTemp(jsonresult.main.temp)
                setDesc(jsonresult.weather[0].description)
                setHumidity(jsonresult.main.humidity)

                // 초기값 false인 isReady값을 true로 변경 => 서버에 갔다와야 하는경우 화면처리 (?)
                setIsReady(true)

                //catch로 문제유발 시 콘솔 확인 
            }).catch(err=>console.log(err))
    }

    //랜더링 됐을때 단 한번 화면에 구현
    useEffect(()=>{
        getData()

    },[])

    if (isReady){ //isReady가 true인 경우 
        return(
        <div className='App'>
            {/* 1-2 변수값을 화면에 출력 */}
            <p>온도 : {temp}</p>
            <p>날씨 : {desc}</p>
            <p>습도 : {humidity}</p>
        </div>
    )
    }else{
        return(
            <div className='App-header'>
                로딩중....
            </div>
        )
    }
}

export default App;