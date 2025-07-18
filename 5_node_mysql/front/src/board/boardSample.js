import '../css/board.css'

import { useEffect, useState } from 'react';
// npm install axios
import axios from 'axios';
import {useParams} from 'react-router-dom'

function App(){

    // [1-2] useState로 상태값 지정
    const [boardContent, setBoardContent] = useState({
        btitle : '',
        bname : '',
        mid : '',
        bpw : '',
        bcontent : ''
    })
    const getValue = (e) => {
        const {name, value} = e.target;
        setBoardContent({
            ...boardContent,
            [name] : value
        })
        // 값변경시 (키보드 누를 때마다) 확인한다면
        // console.log(boardContent)
    }

    const [viewContent, setViewContent] = useState([]);

    const boardLoad = ()=>{
        axios.get('http://localhost:8000/api/get') //백단을 요청 
            .then((result)=>{
                const temp = result.data
                setViewContent([...temp])
            })
    }

    useEffect(()=>{
        boardLoad();
    },[])


    //입력
    const insert = ()=>{
        // alert('ok')
        axios.post('http://localhost:8000/api/insert',boardContent)
            .then(()=>{
                boardLoad();
            })
        
        setBoardContent({
            btitle : '',
            bname : '',
            mid : '',
            bpw : '',
            bcontent : ''
        });

    }

    //수정
    
    const modify = ()=>{
        axios.post(`http://localhost:8000/api/update/${boardContent.bnum}`,boardContent)
            .then(()=>{
                boardLoad();
            })
    }

    //삭제
    const deleteData = (bnum)=>{
        axios.delete(`http://localhost:8000/api/delete/${bnum}`)
            .then(()=>{
                boardLoad();
            })
    }

    //상세보기
    const selectData = (bnum)=>{
        axios.get(`http://localhost:8000/api/edit/${bnum}`)
            .then(result => setBoardContent(result.data[0]))
    }

    

    // ----------------------------------------------------
    // 0. 화면 출력
    return (
        <div>               
                <table>
                    <tr>
                        <td><label>글제목</label></td>  {/* [1-1] 입력값의 상태가 변경시 */}
                        <td><input type="text" name="btitle" onChange={getValue} value={boardContent.btitle ||""}/></td>
                    </tr>
                    <tr>
                        <td><label>작성자</label></td>
                        <td><input type="text" name="bname" onChange={getValue} value={boardContent.bname ||""}/></td>
                    </tr>   
                    <tr>
                        <td><label>아이디</label></td>
                        <td><input type="text" name="mid" onChange={getValue} value={boardContent.mid ||""}/></td>
                    </tr>
                    <tr>
                        <td><label>비밀번호</label></td>
                        <td><input type="text" name="bpw" onChange={getValue} value={boardContent.bpw ||""}/></td>
                    </tr>
                    <tr>
                        <td><label>내용</label></td>
                        <td>
                            <textarea name="bcontent" id="bcontent" cols="30" rows="5" onChange={getValue} value={boardContent.bcontent ||""}></textarea>
                        </td>
                    </tr>  
                    <tr>
                        <td colSpan="2">                        
                            {/* 필수연습 */}
                            <input type="submit" onClick={insert} value="입력"/>
                            {/* 선택연습 */}
                            <input type="submit" onClick={modify} value="수정"/>
                        </td>
                    </tr>
                </table>

                {/* [2-2] 화면출력 */}
                <hr/>
                <div className='App'> [ 목록 ] </div>
                <table className='listBox'>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewContent.map((item,idx)=>{
                                return(
                                        <tr key={idx}>
                                            {/* 선택 연습 제목을 클릭하면 해당하는 레코드가 위의 화면출력 */}
                                            <td>{item.bnum}</td>
                                            <td>
                                                <a onClick={()=>{selectData(item.bnum)}}>
                                                    {item.btitle}
                                                </a>
                                            </td>
                                            <td>{item.bname}</td>
                                            <td>{item.insertdate}</td>
                                            {/* 필수연습 */}
                                            <button onClick={()=>{deleteData(item.bnum)}}>삭제</button>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                
                </table>
            
        </div>
    ); 

}

export default App;



