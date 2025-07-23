
const App = ()=>{

    let msg = 'hello';

    const addData = (x:number, y:number) => { //자료형을 쓰지않으면 컴파일 단계에서 에러 
        return (
            <div>
                {x}+{y} ={x+y}
            </div>
        )
    }

    return (
        <div>
            <h2>안녕, {msg}</h2>
            <hr/>
            {addData(3,4)}
        </div>
    )
}

export default App;