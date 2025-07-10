import '../App.css';

import { useState } from 'react';

function App() {
   
    let [ title, setTitle]  = useState(['맛집1','맛집2', '맛집3'])
    
   
    return (
       <div className="App">
         <div className='App-title'>{ title } </div>

         <ul>
           { 
            title.map((item,idx)=>(
                <li key={idx} onClick={()=> setTitle(['돈가스맛집','쌀국수집','밥집']) }>{ item }</li>
            ))
           }          
        </ul>

        {/* 아이템 클릭시 해당 요소만 변경하려면 */}
        <ul> 
           { 
            title.map((item,idx)=>(
                <li key={idx}>[ { item } ] </li>
            ))
           }           
        </ul>

       </div>
    );
  }
  export default App;