import { useState } from "react";
import App from './components/App';

import produce from 'immer';

//다른데서도 이 타입의 자료형을 사용할 수 있게 export 함 
export type TodoListItemType = {
    no      : number;
    todo    : string;
    done    : boolean;
}


const TodoContext = () => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([ //useState에 자료형 기술 => 배열안의 객체 
        { no : 1, todo : "일어나기", done : true},
        { no : 2, todo : "씻기",    done : false},
        { no : 3, todo : "옷입기",  done : false},        
    ]);

    // [0] 함수 기존 구조만
    const addTodo       = (todo:string) =>{ 
        // 1- ...
        let newTodoList = [...todoList, {no:new Date().getTime(), todo:todo, done:false}]

        setTodoList(newTodoList)

        // 2- immer
    }

    const deleteTodo    = (no:number)  => {
        // alert(no)
        let idx = todoList.findIndex((todo)=>todo.no===no)
        // alert(idx)
        todoList.splice(idx,1)
        let newTodoList = todoList.map((todo)=> {return{...todo}})
        setTodoList(newTodoList);
    }
    const toggleDone    = (no:number)   => { 
        // alert(no)
        // 배열의 값 바꾸는 방법
        // 1 - ...
        let newTodoList = todoList.map((todo)=>{
            if(todo.no===no) todo.done = !todo.done; //todo.no값과 인자로 넘어온 no값이 같은지 확인하고 기존의 todo.done이 true를 갖고있으면 false로 변경 , false면 true로 변경
            return {...todo} 
        })

        setTodoList(newTodoList)
        // 2 - immer
    }

    //App 컴포넌트로 값을 보내고 App에서는 props로 받음 
    return(<App todoList={todoList}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone} />);

}

export default TodoContext;