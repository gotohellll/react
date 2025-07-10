
/* 
    컴포넌트
        - 클래스형
        - 함수형
            ` 첫글자를 대문자로 (클래스형처럼 대치해서 사용한다, 일반함수는 소문자)
            ` render() 필요없음 
*/

import "../App.css";

function App(){

    return( 
            <div className="App">
                <div className="App-link">안녕하세요</div>
                <div className="App-header">배고프다</div>
                <hr/>
                <img src='../logo192.png'/>
            </div>
    );
}

export default App;