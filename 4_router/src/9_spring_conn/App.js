import { BrowserRouter, Route, Routes } from "react-router-dom";

/* 

    npm install axios
    npm install react-router-dom 
    npm install bootstrap 
    npm install bootstrap react-bootstrap (필요하면 설치)

*/

import 'bootstrap/dist/css/bootstrap.css'
import BoardListComp from './components/BoardListComp'
import BoardInsertComp from './components/BoardInsertComp'
import BoardViewComp from './components/BoardViewComp'
import BoardUpdateComp from './components/BoardUpdateComp'
import HeaderComp from './components/HeaderComp'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <HeaderComp/> {/* 공통영역 - 반드시 container위에  */}
                <div className="container">
                    <Routes>
                        <Route path='/'          element={<BoardListComp/>}/>
                        <Route path='/api/board' element={<BoardListComp/>}/>
                        <Route path='/api/insert-board' element={<BoardInsertComp/>}/>
                        <Route path='/api/view-board/:seq' element={<BoardViewComp/>}/>
                        <Route path='/api/update-board/:seq' element={<BoardUpdateComp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
