import '../App.css';

import { Component, useState } from 'react';

// function App() {
   
//     let [ title, setTitle]  = useState('맛집정보')
  
//     return (
//        <div className="App">
//        <ul>
//           {/* 여기 li 요소를 클릭시 '맛집정보'라는 title 변수의 값을 변경 */}
//           <li className='App-title' onClick={()=>{setTitle('돈가스')}}>돈가스 맛집</li>
//           <li className='App-title' onClick={()=>{setTitle('호남식당')}}>호남식당</li>
//           <li className='App-title' onClick={()=>{setTitle('학식')}}>학식</li>
//         </ul>
//         <div className='App-header'>{ title } </div>
//        </div>
//     );
//   }


class App extends Component{

   constructor(){
      super();
      
      this.state = { title : '맛집정보'};
      
   }
   render(){
      return(
         <div className="App">
          <ul>
           {/* 여기 li 요소를 클릭시 '맛집정보'라는 title 변수의 값을 변경 */}
           <li className='App-title' onClick={()=>{this.setState({title:'돈가스맛집'})}}>돈가스 맛집</li>
           <li className='App-title' onClick={()=>{this.setState({title:'호남식당'})}}>호남식당</li>
           <li className='App-title' onClick={()=>{this.setState({title:'학식'})}}>학식</li>
          </ul>
          <div className='App-header'>{ this.state.title } </div>
        </div>
     );
   
   }
}


  
  export default App;