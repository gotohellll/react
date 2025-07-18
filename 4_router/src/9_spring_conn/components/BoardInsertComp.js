import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardInsertComp () {

    // 사용자 입력값을 저장할 변수 선언
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')

    //취소 버튼 
    const navigate = useNavigate()

    const cancleBtnHandler = function(){
        // alert('dd')
        navigate('/') //목록보기(첫번쨰페이지)로 이동
        // navigate(-1) //js에서 history.back() 이 있음 => [뒤로가기 버튼] (안먹힘)
    }

    const saveBtnHandle = function(evt){
        // 화면이 갱신되고 있어 이벤트 막기 
        evt.preventDefault()

        // alert(title+"/"+writer+"/"+content)

        // board 객체에 입력값 받음 
        // 왼쪽이름은 백엔드의 BoardVO 의 멤버변수명과 동일 
        // 오른쪽이름은 위에 state 변수명 
        let board = {
            title: title
            , writer : writer
            , content : content
        }

        // 백단과 연결해 값 보내기
        axios.post('/api/board/write', null, {params:board})
        
        /* 
        axios.post(url, data, config)

        url: 요청을 보낼 주소
        data: 서버로 보낼 데이터(POST의 body) => null → 보낼 데이터(body)가 없음(쿼리 파라미터로만 데이터를 보내고 싶을 때)
        config: 추가 설정(헤더, 파라미터 등

        */
    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={title} onChange={evt=>setTitle(evt.target.value)}/>                             
                                </div>
                                <div className = "form-group">
                                    <label> 작성자 </label>
                                    <input type="text" placeholder="writer" name="writer" className="form-control" 
                                        value={writer} onChange={evt=>setWriter(evt.target.value)} />
                                </div>
                                <div className = "form-group">
                                    <label> 내용  </label>
                                    <textarea placeholder="content" name="content" className="form-control" 
                                        value={content} onChange={evt=>setContent(evt.target.value)}/>
                                </div>
                                <button className="btn btn-success"
                                    onClick={saveBtnHandle}
                                    >저장하기</button>
                                <button className="btn btn-danger" 
                                    onClick={cancleBtnHandler}
                                    style={{marginLeft:"10px"}}>취소하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoardInsertComp;