
/* 
    컴포넌트 
        - 클래스형  : 기존부터 사용
        - 함수형    : 최근에 부각
*/

// const { Component } = require("react");
import { Component } from "react"; //예전부터 쓰던 스타일 
import "../App.css"; //css 임포트 

// 클래스형 컴포넌트
//      [1] Component 상속받기
//      [2] render() 함수 필요함 

class App extends Component{
    //렌더링 : 브라우저에 화면을 출력 
    render(){

        //retrun 바깥 : java script
        //자바스크립트 주석이 먹힘 

        //return 안쪽까진 자바스크립트 주석 가능
        //return - div안 JSX영역이라 주석이 달라짐 
        return(
            //return 안에는 무조건 최상위 태그 1개만 
            //JSX 문법에서는 class = className 
            <div className="App">
                {/* 여기 영역은 JSX 문법 영역  */}
                {/* 여기 안에 주석 */}

                <div className="App-link">안녕하세요</div>
                <div className="App-logo">배고프다</div>
                <hr/>
                <img src='../logo192.png'/>
            </div>
        );
    }
}

export default App; //App을 바깥으로 빼주기 위함 