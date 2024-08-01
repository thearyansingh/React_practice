import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const TodoList = ({listValue,deleteVal,checkValue,checked}) => {
  return (
    <div>
       <li className="todo-item">
              <span className={checked?"checkList":"notCheckList"}>{listValue}</span>
              <button className='check-btn' onClick={()=>checkValue(listValue)}><IoMdCheckmark/></button>
              <button className='delete-btn'  onClick={() => deleteVal(listValue)}><MdDeleteForever/></button>
            </li>
    </div>
  )
}

export default TodoList
