
import '../App.css';

let our = '우리팀화이팅';

let mystyle = 'App-link';

const styleA = {color:'blue', fontSize:'22px'};

function msg(){return "오늘도 행복";}

function App(){
    return(
        <div className='App'>
            <h2 className='{mystyle}'>{our}</h2> 
            {/* 작은따옴표 빼야 적용됨 */}
            <h2 className={mystyle}>{our}</h2>
            <h2 className='App-link'>{our}</h2>
            <hr/>
            <h4>msg()</h4>
            {/* 함수, 변수의 값을 처리하려면 중괄호로 묶어줘야함 */}
            <h4 style={styleA}>{msg()}</h4>
            {/* 바깥 중괄호 : 함수, 변수를 처리하기 위한것/ 내부 중괄호: 객체  */}
            <h4 style={{color:'blue', fontSize:'22px'}}>{msg()}</h4>
            {/* <h4 style={color:'blue', fontSize:'22px'}>확인</h4> =>중괄호가 한개면 에러 */}
        </div>
    );
}

export default App;