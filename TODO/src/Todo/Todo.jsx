import React, { useEffect, useState } from 'react'
import "./Todo.css"

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {
  const todoKey="TodoList"
    const [task,setTask]=useState(()=>{
     const rawData= localStorage.getItem(todoKey)
      if(!rawData) return [];
     return JSON.parse(rawData);
    })
  
    const handleSubmit = (inputValue) => {
      const {id,content,checked}=inputValue
        if (!content) return;
        const forDuplicate= task.find((curTask)=>curTask.content===content)
        if(forDuplicate) return;
        console.log(task)
        setTask((prev) => [...prev,{id,content,checked}]);
       
       

      }
      localStorage.setItem(todoKey,JSON.stringify(task))
      const clearAll=()=>{
setTask([]);
      }
      const deleteTodo = (value) => {
        const updatedTodos = task.filter((i) => i.content !== value);
    console.log(value);
        setTask(updatedTodos);
      };

      const handleChecked=(content)=>{
const updatedTask=task.map((curTask)=>{
if(curTask.content===content){
return{...curTask,checked:!curTask.checked}
}
else{
  return curTask;
}
})
setTask(updatedTask)

      }
   
     
   
      
  return (
    <div>
      <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
        </header>
      <TodoDate/>
<TodoForm onAdd={handleSubmit}/>
<section className='myUnOrdList'>
    <ul>
        {task.map((curTask)=>(
         <TodoList key={curTask.id}
          listValue={curTask.content}
           checked={curTask.checked}
            deleteVal={deleteTodo}
             checkValue={handleChecked}
         
         />
        ))}
    </ul>
  
</section>

{task.length>=2?<button className='clear-btn' onClick={clearAll}>Clear All</button>:<></>}
   </section>
    </div>
  )
}

export default Todo
