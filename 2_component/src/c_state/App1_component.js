
import '../App.css';
// import MyHeader from './components/MyHeader';
import XHeader from './components/MyHeader'; // 이름을 다르게 줘도 가능하긴 함 
import MyMenu from './components/MyMenu';

// function App(){          //함수 만드는 방법 1 
// const App = function(){     // 2 함수 리터럴 : 함수도 변수에 넣을 수 있다 
const App = ()=>{               // 3 화살표 함수                            => 함수 만드는 방법 3가지 모두가능 
    return(
        <div className='App'>
            <XHeader title='메뉴1' content='맛있는 밥'></XHeader>
            <XHeader title='메뉴2' content='맛있는 면'/>
            <XHeader title='메뉴3' content='맛있는 거'/>
            <hr/>
            <MyMenu data='안녕하세요'></MyMenu>
            <MyMenu data='hi'/>
        </div>
    );
}

export default App;