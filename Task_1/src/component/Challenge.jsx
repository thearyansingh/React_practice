import React, { useState } from 'react'

const Challenge = () => {
    const [count,setCount]=useState(0)
    const [limit, setLimit]=useState(1);
    const increase=()=>{
        setCount(count+parseInt(limit,10))
    }
    const decrease=()=>{
        setCount(count-parseInt(limit,10))
    }
    const handleChange=(e)=>{
        setLimit(e.target.value)
    }
  return (
    <div className='container-state'>
        <h1>use state challenge</h1>
        <p>Count <span>{count}</span></p>
        <label htmlFor="number">count limit</label>
        <input type="number" 
        value={limit}
        onChange={handleChange}
        />
        <div className='buttons'>
            <button onClick={increase}>increment</button>
            <button onClick={count>0?decrease:<></>}>decrement</button>
            <button onClick={()=>setCount(0)}>reset</button>
        </div>

      
    </div>
  )
}

export default Challenge
