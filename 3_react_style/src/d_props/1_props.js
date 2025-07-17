
/* 

    App
    |
    WelcomDialog
    |
    TextPart
    |
    FancyBorder

*/
import './temp.css';

const FancyBorder = (props) =>{ //props는 바로 상위 컴포넌트의 값만 받을뿐 조상의 값까지 받지못함 
    return(
        <div className='FancyBorder'>
            <h1 className='Dialog-title'>{props.title}</h1>
            <p className='Dialog-message'>{props.message}</p>
        </div>
    )
}

const TextPart = (props) =>{ //중간 매개체 역할: 부모의 데이터를 자식으로 넘겨줌 
    return(
        <FancyBorder title={props.title} message={props.message}></FancyBorder>
    )
}

const WelcomDialog = () =>{
    return(
        <TextPart title="환영합니다" message="오늘도 잘"/>
    )
}

const App = () =>{
    return(
        <div>
            <WelcomDialog/>
        </div>
    )
}

export default App