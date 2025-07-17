
function App(){

    const inputclick = ()=>{
        alert('input button click')
    }

    const buttonPresed = (event)=>{
        event.preventDefault(); // submit 역할을 막아주기 
        alert('button press')


    }

    const handleSubmit = (event)=>{
        event.preventDefault(); // submit 역할 막기
        alert('submit button')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="button" value='버튼1' onClick={inputclick}></input><br/>
                {/* 버튼1 : 화면 갱신 일어나지 않음 */}
                <button onClick={buttonPresed}>버튼2</button><br/>
                {/* 버튼2 : 화면 갱신됨 > 서버 찾아감 (button태그는 submit역할을 장착함 => preventDafault로 이벤트 막아주기) */}
                <input type="submit" value='버튼3'></input>
                {/* submit기능은 화면 갱신 => form태그에 onSubmit으로 막아야함  */}

            </form>
        </>
    )
}

export default App;