import React, { useState } from 'react'

const TodoForm = ({onAdd}) => {
    const [inputValue,setInputvalue]=useState({})
    const handleChange=(value)=>{
        setInputvalue({id:value, content:value ,checked:false})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        onAdd(inputValue)
        setInputvalue({id:"", content:"" ,checked:false})
        
    }
  return (
    <div>
      <section className='form' onSubmit={handleSubmit}>
    <form>
        <div>
            <input 
            type="text"
             classname="todo-input"
              autoComplete='off' 
              value={inputValue.content}
              onChange={(e)=>handleChange(e.target.value)}
              />
        </div>
        <div>
            <button type="submit" className='form-button'>Add task</button>
        </div>
    </form>
</section>
    </div>
  )
}

export default TodoForm
