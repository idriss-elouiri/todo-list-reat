import { useEffect, useState } from 'react';
import './style.css';
import FormTodo from './components/FormTodo';
import ParentList from './ParentList';

function App() {
  const [todos , setTodos] = useState(() =>{
    const localValue = localStorage.getItem('items');
    if(localValue === null) return [];
    return JSON.parse(localValue)
  })
  useEffect(() =>{
    localStorage.setItem("items" , JSON.stringify(todos))
  },[todos])
  function addTodo(value){
    setTodos(currentTodos =>{
      return[
        ...currentTodos , {
          id: crypto.randomUUID() , 
          value ,
          completed:false
        },
      ]
    })
  }
  function toggleTodo(id , completed){
    setTodos((currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id == id){
          return{...todo , completed};   
        }
        return (todo);
      })
    }))
  }
  function handleDelete(id){
    setTodos(currentTodos =>{
     return currentTodos.filter(todo => todo.id ==! id)
    })
  }
  return (
    <div className="App">
      <FormTodo addTodo={addTodo} />
      <div className='Todo-List'>
        <h1>Todo List</h1>
        <ParentList todos={todos} toggleTodo={toggleTodo} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
