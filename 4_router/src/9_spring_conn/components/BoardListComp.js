import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardListComp () {

    // result.data 값을 넣을 변수 설정
    const [boards, setBoards] = useState([])

    useEffect(()=>{
        axios.get('/api/board') // back-end 서버 연결(8080 톰캣 서버)
                .then(result=>{
                    // console.log(result.data)

                    const boards = result.data //지역변수라 위에 있는 변수와 다른 변수 / 헷갈리면 temp 
                    setBoards([...boards])
                })
    },[])

    const navigate = useNavigate();

    const createBoard = ()=>{
        // alert('dd')
        navigate('/api/insert-board') // App.js의 url을 부르는것

    }

    const readBoard = (evt, seq)=>{
        // a태그는 화면갱신하기떄문에 이벤트 방지
        evt.preventDefault()

        navigate(`/api/view-board/${seq}`) //seq번호로 페이지 넘기기
        
    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boards.map(board=>
                                <tr key={board.seq}>
                                    <td>{board.seq}</td>
                                    <td>
                                        <a onClick={(evt)=>{readBoard(evt, board.seq)}}>{board.title}</a>
                                    </td>
                                    <td>{board.writer}</td>
                                    <td>{board.regdate}</td>
                                    <td>{board.cnt}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>         

            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}>글 작성</button>
            </div>

        </div>
    );

}

export default BoardListComp;
