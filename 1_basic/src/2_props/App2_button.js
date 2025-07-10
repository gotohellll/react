
/* 
    - 컴포넌트와 엘리먼트

    - props
        ` 컴포넌트에 전달되는 데이터 객체 
        ` read-only : 전달받은 데이터는 수정할 수 없다 

    - 컴포넌트 방식
        ` 클래스
        ` function 
        => 첫글자를 대문자로 (소문자 사용하면 html 태그라고 인식)

*/

import '../App.css';

function Button(props){
    return(
        <button className={`App-${props.css}`}>
            {/* JSX 문법 */}
            {props.label}

        </button>
    );
}

function App(){ // 다른데서 App을가져다쓰는 최상위 컴포넌트가 있으면 여기도 props를 줘야함 
    return(
        <div className="App">
            <Button label='확인1' css='link'/>
            <Button label='확인2' css='header'></Button>

        </div>
    );
}

export default App;
