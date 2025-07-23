import { useContext } from "react";
import TodoContext, { TodoListItemType } from "../TodoContext";
import TodoListItem from "./TodoListItem";

// type TodoListType = {
//     todoList : Array<TodoListItemType>;
//     deleteTodo : (no:number)=>void;
//     toggleDone : (no:number)=>void;
// }

const TodoList = () => {

    const value = useContext(TodoContext);

    let items = value?.state.todoList.map((item)=>{
        return <TodoListItem key={item.no} 
                    todoItem={item} 
                    deleteTodo={value?.actions.deleteTodo}
                    toggleDone={value?.actions.toggleDone}
        />
    });

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