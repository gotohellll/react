import { useState } from "react";

const App = ()=>{

    let [count, setCount] = useState(100);

    const synch_increment = ()=>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1); // 3번 불려졌음에도 3씩 증가되는게 아니라 1씩 증가됨 
    }
    
    const asynch_increment = ()=>{
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1) // 3씩 증가
    }
    
    const asynch_increment_temp = ()=>{
        setCount(()=>count+1)
        setCount(()=>count+1)
        setCount(()=>count+1) // 1씩 증가
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={synch_increment}>동기식</button>
            <button onClick={asynch_increment}>비동기식(리액트권장)</button>
            <button onClick={asynch_increment_temp}>잘못된 방식</button>
        </div>
    )
}

export default App;