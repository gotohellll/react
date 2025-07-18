import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardViewComp(){

    // 넘어오는 파라미터값 받기
    const {seq} = useParams();

    // 값 담을 변수 지정
    const [board, setBoard] = useState([])

    useEffect(()=>{
        axios.get(`/api/board/${seq}`)
            .then(result=> setBoard(result.data)) //배열이 아니여서 전개연산자 쓰지 않음 
    },[])

    const navigate = useNavigate()

    const listBtnHandler = ()=>{
        navigate('/')
    }
    
    const deleteBtnHandler = ()=>{

        axios.delete(`/api/board/${seq}`)
        navigate('/')
    }


    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보고 </h3>
                <div className='card-body'>
                    <div className='row'>
                        <div className='alert alert-success' >제목 : {board.title}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>작성자 : {board.writer}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>내용 : {board.content}</div>
                    </div>

                    <button className='btn btn-primary' 
                        onClick={listBtnHandler}
                        style={{marginLeft:'10px'}}>글목록으로 이동</button>
                    <button className='btn btn-danger' 
                        onClick={deleteBtnHandler}
                        style={{marginLeft:'10px'}}>삭제하기</button>
                </div>
            </div>
        </div>
    )

}

export default BoardViewComp;