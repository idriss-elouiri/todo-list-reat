import TodoList from './components/TodoList';

const ParentList = ({todos , toggleTodo , handleDelete}) => {
    return ( 
        <ul>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo =>{
            return(
                <TodoList
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    handleDelete={handleDelete}
                />        
          )})}
        </ul>
     );
}
 
export default ParentList;