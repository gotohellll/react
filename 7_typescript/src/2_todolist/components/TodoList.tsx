import { TodoListItemType } from "../TodoContext";
import TodoListItem from "./TodoListItem";

type TodoListType = {
    todoList : Array<TodoListItemType>;
    deleteTodo : (no:number)=>void;
    toggleDone : (no:number)=>void;
}

const TodoList = (props:TodoListType) => {

    let items = props.todoList.map((item)=>{
        return <TodoListItem key={item.no} 
                    todoItem={item} 
                    deleteTodo={props.deleteTodo}
                    toggleDone={props.toggleDone}
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