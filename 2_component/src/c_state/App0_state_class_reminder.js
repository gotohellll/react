import { Component } from "react";

class ClassComp extends Component{
    
    constructor(props){
        super(props)

        // 정적 변수 선언 - 값 변경 안됨 
        // this.data = 100; 

        // 값이 변경 가능한 변수
        this.state = {
            number : 0
        }
    }
    
    render(){
        return(
            <div>
                <h3>클래스 컴포넌트</h3>
                <p>숫자 : {this.state.number}</p>
                <hr/>
                <input type="button" value='확인1' onClick={
                    // 일반 함수는 바인딩 필요 
                    function(){
                        this.setState({number: Math.ceil(Math.random()*100) }) 
                    }.bind(this)
                }></input>
                <input type="button" value='확인2' onClick={
                    // 화살표 함수는 바인딩이 필요없다 : 화살표 함수 많이 쓰는 이유 
                    ()=>{
                        this.setState({number: Math.ceil(Math.random()*100) })
                    }
                }></input>
            </div>
        )
    }
}

export default ClassComp