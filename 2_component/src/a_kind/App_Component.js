
// [예시] <h2> ooo님, 반갑습니다 </h2>

import { Component } from 'react';
import '../App.css';

function FuncHello(props){
    return(
        <h2>{props.name}님, 반갑습니다</h2>
    );
}

class ClassHello extends Component{
    render(){
        return(
            <h2>{this.props.name}님, 반갑습니다</h2>
        );
    };
};


function App(){
    return(
        <div className="App">
            함수형 컴포넌트 : <FuncHello name='홍길동'/>
            <hr/>
            클래스형 컴포넌트 : <ClassHello name='박길동'/>

        </div>
    );
}

export default App;