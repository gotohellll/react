import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import TodoContext  from "../TodoContext";

const TodoList = (props) => {

    // let items = props.todoList.map((item)=>{
    //     return <TodoListItem key={item.no} 
    //                 todoItem={item} 
    //                 deleteTodo={props.deleteTodo}
    //                 toggleDone={props.toggleDone}
    //     />
    // });

    const value = useContext(TodoContext)

    let items = value?.state.todoList.map((item)=>{
        return <TodoListItem key={item.no}
            todoItem={item}
            deleteTodo={value?.actions.deleteTodo}    
            toggleDone={value?.actions.toggleDone}
        />
    })

    return(
        // [0] 기존 구조
        <div>
            <div>
                <ul>{items}</ul>
            </div>
        </div>
    
    );
}

export default TodoList;