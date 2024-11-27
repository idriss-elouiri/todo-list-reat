const TodoList = ({completed, id, value, toggleTodo, handleDelete}) => {
    return ( 
        <li>
        <input
        type='checkbox'
        checked={completed}
        onChange={(e) => toggleTodo(id , e.target.checked)}
        />
        <span>{value}</span>
        <button className='btn-danger' onClick={ () =>(handleDelete(id))}>Delete</button>
        </li>
     );
}
 
export default TodoList;