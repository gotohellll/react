
/* 
    MyHeader 컴포넌트

    <header>
        <h1> 제목 </h1>
        <p> 내용 </p>
    </header>


*/

import { Component } from "react";

/* 
function MyHeader(props){
    console.log(props)

    // props.titile = '제목변경'; 에러 발생(브라우저에서 확인가능) : props는 read-only라서 변경안됨
    let mytitle = props.title + '변경';
    
    return(
        <header>
            <h1>{props.title}</h1>
            <h4>{mytitle}</h4>
            <p>{props.content}</p>
        </header>
    );

}
*/

class MyHeader extends Component{

    // let mytitle = '변경'; render함수 바깥에서 변수선언은 에러 
    render(){
        // console.log(this)
        let mytitle = this.props.title + '변경2';
        return(
            <header>
                <h1>{this.props.title}</h1>
                <h4>{mytitle}</h4>
                <p>{this.props.content}</p>
            </header>
        );
    };
}
// 클래스형 에서는 props쓰면 에러 'props' is not defined => this로 멤버변수로 잡아주고 props써야함


function App(){
    return(
        <div className="App">
            <MyHeader title='자바' content='즐거운 자바'></MyHeader>
            <MyHeader title='파이썬' content='재미있는 파이썬'></MyHeader>
        </div>
    );
}

export default App;
