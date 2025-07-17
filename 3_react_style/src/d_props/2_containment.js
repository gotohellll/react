
import './temp.css'

function FancyBorder(props){
    return(
        <div className='FancyBorder'>
            <div className='Dialog-title'>{props.data}</div>
            {/* 부모컴포넌트의 자식 요소들을 받을 때 */}
            {props.children}
        </div>
    )
}

function WelcomDialog(props){
    return(
        <FancyBorder data="중요한 데이터">
            {/* 태그 사이의 자식 요소들 */}
            <h1 className='Dialog-message'>환영합니다</h1>
            <hr/>
            <p className='Dialog-message'>우리 사이트에 오신 당신은 행운</p>
        </FancyBorder>
    )
}

function App(){
    return <WelcomDialog/>
}

export default App;