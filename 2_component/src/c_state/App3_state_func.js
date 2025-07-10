
/* 
    state : 컴포넌트에서 값 변경하는 데이터 

    - [클래스형 컴포넌트]
        ` setState() 함수 이용하여 값 변경
    
    - [함수형 컴포넌트]
        ` useState() 함수 이용하여 setter를 지정하고 setter() 함수로 값 변경
        
        [예]

        let [변수명, setter ] = useState(초기값);

        let [test, setTest] = useStaet(0); 
        let [test, setTest] = useStaet("홍길동"); 
        let [test, setTest] = useStaet([]); 
*/

import { useState } from 'react';
import '../App.css';

function App(){
    //정적 데이터 변수
    let title = '우리동네 사이트';

    //변경 가능한 변수 : state
    let [favorite, setFavorite] = useState('맛집정보');

    return(
        <div className='App'>
                <h2>함수형 컴포넌트에서 state 변경하기</h2>
                <div className='App-link'>{title}</div>
                <div className='App-subtitle'>{favorite}</div>
                <hr/>
                <button onClick={()=>{title='너희동네 사이트'}}>일반변수 변경</button><br/>
                <button onClick={()=>{favorite='달인의 맛집'}}>state변수 직접 변경</button><br/>
                <button onClick={()=>{setFavorite('너만의 맛집')}}>state변수 setter로 변경</button><br/>
                {/* setter를 이용한 애만 바뀜 (클래스형 setState는 화면갱신하면서 다른애들도 바뀜) */}
        </div>        
    );
}

export default App;