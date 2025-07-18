
import 'bootstrap/dist/css/bootstrap.css'
import MemberListComp from './components/MemberListComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Member = ()=>{
    return(
        <div>
            <BrowserRouter>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<MemberListComp/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Member;