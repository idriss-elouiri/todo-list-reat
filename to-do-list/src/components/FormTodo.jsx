import { useState } from 'react';
const FormTodo = ({addTodo}) => {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(value === "") return

        addTodo(value)
        
        value("")
    }
    return ( 
        <form onSubmit={handleSubmit} className="new-item-form">
          <label htmlFor="item">New Item</label>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
            id="item"
          />
        <button className="btn">Add</button>
      </form>
     );
}
 
export default FormTodo;