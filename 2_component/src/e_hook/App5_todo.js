//연습

/* 

    랜더링 성능 향상
        - useMemo()
        - useCallback()

*/
import { useCallback, useState, useMemo } from 'react';
import '../App.css';

const App = ()=>{

    // todo입력값
    const [todo, setTodo] = useState('');

    // todo 입력값을 담을 배열
    const [todoList, setTodoList] = useState([]);

    // 함수를 보내서 useCallback으로 성능향상 
    const addTodo = useCallback((todo)=>{ //새로운 할일을 담은 todo를 인자로 받음 
        // 기존의 todoList 배열을 전개연산자로 복사하고 배열의 마지막에 새로운 객체 추가 (id: 현재시간을 pk로사용 , todo : 입력받은 할일 내용 저장)
        const newTodoList = [...todoList, {id: new Date().getTime(), todo: todo}]
        //새 배열값으로 todoList값 변경 
        setTodoList(newTodoList); 
        // 할일 입력창 초기화 
        setTodo('')},[todo, todoList]
    )
    

    // return값이 있어서 useMemo로 성능향상 
    const getTodoListCount = (todoList) =>{
        return todoList.length
    }

    const resultCount = useMemo(()=>getTodoListCount(todoList),[todoList])

    // 함수를 보내서 useCallback으로 성능향상 
    const deleteTodo = useCallback(id=>{
        //todoList 배열에서 요소 하나씩 뽑아서 item(각 요소)의 id와 입력받은id가 같은지 확인 
        let idx = todoList.findIndex(item => item.id===id) 

        // 새로운 배열 복사
        let newTodoList = [...todoList]
        newTodoList.splice(idx, 1) //idx 인덱스를 찾아 idx위치에서 1개 요소 삭제 

        //상태 업데이트 
        setTodoList(newTodoList); //newTodoList로 값 변경 
    }, [todoList]) //의존성 배열 , todoList가 변경될 때만 deleteTodo 함수가 새로 만들어짐

    return(
        <div className="App">
            <input type='text' value={todo} onChange={(evt)=>{ return setTodo(evt.target.value)}}></input>
            <button onClick={()=>addTodo(todo)}>할일 추가</button>
            <hr/>
                <div className='App-subtitle'>남은 할일의 갯수 : {resultCount}</div>
            <hr/>

            {/* 여기에 할일 목록 출력 */}
            <ul>
                {
                    todoList.map((item)=>{
                        return(
                            <li key={item.id}>
                                <span>{item.todo}</span>
                                <button onClick={()=>deleteTodo(item.id)}>삭제</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App;