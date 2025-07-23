import { TodoListItemType } from "../TodoContext";
import InputTodo    from "./InputTodo";
import TodoList     from "./TodoList";

// 받을 props의 타입 지정 
// type AppProps = {
//     todoList : Array<TodoListItemType>; //배열 안의 객체 
//     addTodo  : (todo:string) => void; //인자의 자료형과 리턴값을 기술
//     deleteTodo : (no:number) => void;
//     toggleDone : (no:number) => void;
// }

const App = () =>{ //context를 쓰면 props 필요없음 
    return (
        // [0] 기존 구조
        <div>
            <div>
                <div>할일목록</div>
            </div>
            <div>
                <div>
                    <InputTodo  />
                    <TodoList  />
                </div>
            </div>
        </div> 
    );
}

export default App;