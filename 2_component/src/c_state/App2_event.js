
import '../App.css';

function App(){

    function btnClick() { alert('확인1');}

    var btnClick2 = ()=>{alert('확인4');};

    return(
        <div className='App'>

            {/* <button onClick={alert('확인0')}>이벤트확인0 ( 이벤트처리가 아님, 읽자마자 뜸 )</button> */}
            <button onClick={btnClick}>이벤트확인1</button>
            <hr/>

            <button onClick={ function() {alert('확인2');}}>이벤트확인2</button>
            <hr/>

            <button onClick={ () => {alert('확인3');}}>이벤트확인3</button>
            <hr/>

            <button onClick={btnClick2}>이벤트확인4</button>
        </div>
    );
};

export default App;