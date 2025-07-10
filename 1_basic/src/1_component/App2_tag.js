/* 
    리액트의 장점 <- 리액트의 사용 이유

    1> 태그 재사용
    2> 데이터 바인딩 
*/
import { Component } from "react";
import "../App.css";

// 함수형 컴포넌트
function MyHeader(){
    return(
        <div>
            <h1 className="App-link">우리 사이트</h1>
            <hr/>
        </div>
    );
}

// 클래스형 컴포넌트 
class MyFooter extends Component{
    render(){
        return(
            <div className="App-logo">
                <h2>광고사이트</h2>

            </div>
        );
    }
}

function App(){
    return(
        <div className="App">
            {/* 컴포넌트를 태그로 사용 */}
            {/* 기존 header 태그와 헷갈리지 않게 대문자사용 */}
            <MyHeader></MyHeader>
            <MyHeader/>
            <hr/>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
            {/* 태그 재활용 가능 */}
        </div>
    );
}

export default App;