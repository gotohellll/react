import { useState } from "react";
import App from './components/App';

import produce from 'immer';
import React from 'react'

// ++++++++++++++++++++++++++++
// [[1]] Context 객체 생성
const TodoContext = React.createContext();

// ++++++++++++++++++++++++++++
// [[2]] 상태와 상태 변경 함수를 가진 컴포넌트 (Provicder)


const TodoProvider = (props) => {
    const [todoList, setTodoList] = useState([
        { no : 1, todo : "일어나기", done : true},
        { no : 2, todo : "씻기",    done : false},
        { no : 3, todo : "옷입기",  done : false},        
    ]);

    // [0] 함수 기존 구조만
    const addTodo       = (todo) =>{ 
        // 1- ...
        let newTodoList = [...todoList, {no:new Date().getTime(), todo:todo, done:false}]

        setTodoList(newTodoList)

        // 2- immer
    }

    const deleteTodo    = (no)  => {
        // alert(no)
        let idx = todoList.findIndex((todo)=>todo.no===no)
        // alert(idx)
        todoList.splice(idx,1)
        let newTodoList = todoList.map((todo)=> {return{...todo}})
        setTodoList(newTodoList);
    }
    const toggleDone    = (no)   => { 
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
    // return(<App todoList={todoList}
    //             addTodo={addTodo}
    //             deleteTodo={deleteTodo}
    //             toggleDone={toggleDone} />);

    // ++++++++++++++++++++++++++++
    // [[3]] <TodoContext.Provider>에 value로 전달할 객체 생성 

    const values = {
        state : {todoList}
        , actions : {addTodo, deleteTodo, toggleDone}
    }

    return(
        <TodoContext.Provider value={values}>
            {props.children}
        </TodoContext.Provider>
    )

}

// [[4]] 
export {TodoProvider}
export default TodoContext;