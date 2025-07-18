import axios from "axios";
import { useEffect } from "react";

const App = ()=>{

    useEffect(()=>{
        axios.get('http://localhost:8080/api/board')
            .then(result=>console.log(result.data))
    },[])

    return(
        <div>확인</div>
    )
}

export default App;