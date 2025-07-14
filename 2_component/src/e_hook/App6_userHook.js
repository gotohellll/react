
/* 
    사용자 hook


*/

import { useEffect, useState } from "react";

function useCounter(initValue){
    const [count, setCount] = useState(initValue);

    //count값을 받아 하나씩 더함 
    const incrementCount = () => setCount(count=>count+1);

    //count값을 받아 하나씩 뺌
    const decrementCount = () => setCount(count=>Math.max(count-1, 0)) //음수보다 작아지면 0으로 

    return [count, incrementCount, decrementCount];
}

const MAX_CAPACITY = 5;

function Room(){

    const [count, increseCount, decreseCount] = useCounter(0);

    const [isFull, setIsFull] = useState(false);

    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY)
        console.log(`현재 수 확인: ${count} - ${isFull}`)
    },[count]);

    return(
        <div>
            <p> {` 총 ${count}명 입실`}</p>
            <button onClick={()=>increseCount()}>입실</button>
            <button onClick={()=>decreseCount()}>퇴실</button>
            {isFull && <p style={{color:'red'}}>정원이 다 찼습니다</p>}
        </div>
    )
}

export default Room;