import { useState } from "react";
import Calc from "./2_Calc";

const App = ()=>{
    
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)

    return(
        <div>
            <Calc x={1} y={2} op={"+"}/>
            <Calc x={4} y={5} op={"-"}/>
            <Calc x={3} y={8} op={"*"}/>
            {/* 타입이 정확하게 맞춰지지 않으면 오류, 인자 갯수가 맞지 않으면 오류 => 디폴트값 설정으로 해결 */}
            <Calc x={3} y={8}/>
            <Calc/>
        </div>
    )
}

export default App;