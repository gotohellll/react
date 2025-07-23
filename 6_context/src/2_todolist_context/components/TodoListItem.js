
const TodoListItem = (props) => {

    let itemClassName = 'list-group-item';
    if (props.todoItem.done) itemClassName += ' list-group-item-success' //true이면 클래스명 하나 더 부착



    // [0] 기존 구조
    return (
        <li className={itemClassName}>
            <span className={props.todoItem.done?"todo-done  pointer":"pointer"} 
                onClick={()=>props.toggleDone(props.todoItem.no)} //todoList의 no를 toggleDone 함수의 인자로 넘김
            >
                {props.todoItem.todo}
                {props.todoItem.done?'  (완료)':''}
            </span>
            <span className="float-end badge bg-secondary pointer"
                onClick={()=>{props.deleteTodo(props.todoItem.no)}}
            > [ 삭제 ] </span>
        </li>
    );


}

export default TodoListItem;