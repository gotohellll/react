
import '../App.css';

function Book(props){ //하위컴포넌트
    return(
        <div>
            <h2>책제목 : {props.title}</h2>
            <h4>저자 : {props.writer}</h4>
            <h5>가격 : {props.price}</h5>
        </div>
    );
}

function App(){ // App : 상위컴포넌트 
    return(
        <div className="App">
            {/* 엘리먼트 */}
            <Book title='자바' writer='A' price='1000'></Book> 
            <Book title='파이썬' writer='B' price='2000'></Book>
            <Book title='리엑트' writer='C' price='3000'></Book>
        </div>
    );
}

export default App;