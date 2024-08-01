import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000);
       return() =>clearTimeout(timer)
    },[])
  return (
    <div>
      <h1>Count</h1>
      <p style={{fontSize:"20px"}}>{count}</p>

    </div>
  )
}

export default Count
