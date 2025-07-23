import InputTodo    from "./InputTodo";
import TodoList     from "./TodoList";

const App = (props) =>{
    return (
        // [0] 기존 구조
        <div>
            <div>
                <div>할일목록</div>
            </div>
            <div>
                <div>
                    <InputTodo addTodo={props.addTodo} />
                    <TodoList  todoList={props.todoList}
                                deleteTodo={props.deleteTodo}
                                toggleDone={props.toggleDone}
                    />
                </div>
            </div>
        </div> 
    );
}

export default App;