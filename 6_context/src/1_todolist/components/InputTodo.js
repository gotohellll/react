import { useState } from "react";


const InputTodo = (props) => {
    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');

    const changeTodo = (evt)=>{
        setTodo(evt.target.value)

    }

    const addHandler = ()=>{
        props.addTodo(todo)
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