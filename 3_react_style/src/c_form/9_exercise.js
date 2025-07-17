import { useState } from "react"

const Cost = (props)=>{

    const exchange = 1381.51;
    const [won, setWon] = useState(0)
    const [dol, setDol] = useState(0)
    const usd = won / exchange;
    const krw = dol*exchange;

    return(
        <div>
            <div>
                <h5>{props.title}</h5>
                <input type="text" value={won} onChange={(e)=>{}} ></input>
            </div>
        </div>
    )
}







const App = ()=>{



    return(
        <div>
            
            <Cost title="원화 금액을 입력하세요" type="krw"></Cost>
            <Cost title="달러 금액을 입력하세요" type="usd"></Cost>
        </div>
    )
}

export default App;