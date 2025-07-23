import { useContext, useState } from "react";
import TodoContext from "../TodoContext";


const InputTodo = (props) => {

    // +++++++++++++++++++++++++++
    // context를 사용하고자 한다면
    const value = useContext(TodoContext);

    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');

    const changeTodo = (evt)=>{
        setTodo(evt.target.value)

    }

    const addHandler = ()=>{
        // +++++++++++++++++++++++++++++++
        // props.addTodo(todo)
        value?.actions.addTodo(todo);
        setTodo('')
    }

    //enter 처리
    const enterKey = (evt)=>{
        if(evt.key ==='Enter'){addHandler()} //이벤트 키값이 Enter일때 addHandler 함수 호출
    }

    return(
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input type='text' id='msg' name='msg' 
                        value={todo} placeholder="여기에 입력" className="form-control" 
                        onChange={changeTodo} onKeyUp={enterKey}
                    />
                    <span className="btn btn-primary" onClick={addHandler}> [ 추가 ] </span>    
                </div>
            </div>
        </div>
    );


}

export default InputTodo;