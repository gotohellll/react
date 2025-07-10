
/* 
    state : 컴포넌트에서 값 변경하는 데이터 

    [클래스 컴포넌트인 경우]
    ` state 직접 변경은 안됨
    ` setState()를 이용해서 변경 
*/


import { Component } from 'react';
import '../App.css'

class App extends Component{
    
    // let title = '우리동네'; => 변수선언하면 에러, 생성자 함수 안에서 변수선언해야함
    constructor(props){

        super(props); //부모의 생성자 함수를 불러야 this 사용가능 

        //정적인 데이터
        this.title = '우리동네 사이트';

        //변경 데이터 (state안에서 변수선언해야 변경가능)
        this.state = {
            favorite : '맛집정보'
        }
    }

    render(){



        return(
            <div className='App'>
                <h2>클래스형 컴포넌트에서 state 변경하기</h2>
                <div className='App-link'>{this.title}</div>
                <div className='App-subtitle'>{this.state.favorite}</div>
                <hr/>
                <button onClick={()=>{
                    this.title = "너네동네 사이트";
                    console.log(this.title); //변경은되나 화면갱신이 안됨 
                }}>일반변수 변경하기</button><br/>
                <button onClick={()=>{
                    this.state.favorite = "우리집 맛집";
                    console.log(this.state.favorite); //변경은되나 화면갱신이 안됨 
                    this.forceUpdate(); //강제로 화면 변경 
                }}>state 변수 직접 변경하기</button><br/>
                <button onClick={()=>{
                    this.setState({favorite:"맛집천하"}) //값을 변경하면서 화면갱신까지 함 => 화면 갱신이 되면서 위에 애들도 바뀜 
                }}>state 변수 setState()로 변경하기</button><br/>
                {/* 값을 변경할때는 setState만 먹힌다 */}
            </div>
        )
    }
        
    
}

export default App;