
// cmd 창 에서 설치 => npm install axios 

/* 
    차이점
    fetch : response객체로 받아와 json으로 변경 필요 

    axios : get함수가 있음, post도 있다 / 자체적으로 json구조임 

*/
import axios from "axios";
import { useEffect, useState } from "react";



const App = ()=>{

    const [temp, setTemp] = useState('');
    const [desc , setDesc] = useState('');
    const [humidity, setHumidity] = useState('');

    // const [isReady, setIsReady] = useState(false);

    useEffect(()=>{
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then(result => {
                console.log(result)
                // console.log(result.data.main.temp)
                // console.log(result.data.weather[0].description)
                setTemp(result.data.main.temp)
                setDesc(result.data.weather[0].description)
                setHumidity(result.data.main.humidity)

                // setIsReady(true)

            })
    },[])

    return(
        <div>
            <p>온도 : {temp}</p>
            <p>날씨 : {desc}</p>
            <p>습도 : {humidity}</p>
        </div>
    )
}

export default App;