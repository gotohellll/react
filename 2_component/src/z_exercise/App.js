import { useState } from "react"

const MyCount = () => {

    const useCounter = (initValue)=>{

        const [count, setCount] = useState(initValue);

        //count값을 받아 하나씩 더함 
        const incrementCount = () => setCount(count=>count+1);

        //count값을 받아 하나씩 뺌
        const decrementCount = () => setCount(count=>Math.max(count-1, 0)) //음수보다 작아지면 0으로 

        return [count, incrementCount, decrementCount];
    }


    const  [count, increseCount, decreseCount] = useCounter(0);

    return(
        <div>
            <button onClick={()=>{decreseCount()}}>▼</button>
            <input type="text" value={count} ></input>
            <button onClick={()=>{increseCount()}}>▲</button>
        </div>
    )
}

const MyMenu = (props) => {
    return(
        <div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
            사과&nbsp; <MyCount></MyCount>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            배&nbsp;&nbsp;<MyCount></MyCount>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            귤&nbsp;&nbsp;<MyCount></MyCount>
            </div>
            
        </div>
    )
}

export default MyMenu;

