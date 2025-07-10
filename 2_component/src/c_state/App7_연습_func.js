import { useState } from 'react';
import '../App.css';

function MyNav( /* 여기 */){
    var lists = []
    /* 상위컴포넌트에서 넘겨받은 데이타를 <li>를 구성하여 lists 배열로 만든다 */



    
    return ( <ul>{lists}</ul>)
}

function App(){

  let [links, setLinks] = useState(
    [
      { id: 'daum', name: '다음3',  site : 'http://www.daum.net'},
      { id: 'naver', name: '네이버3',  site : 'http://www.naver.com'},
      { id: 'nate', name: '네이트3',  site : 'http://www.nate.com'}
    ]
  )  

    return (
      <div className='App-header'>
          <MyNav data={links}></MyNav>
      </div>
    )
}

export default App;