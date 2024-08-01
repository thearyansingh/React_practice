import React from 'react'
import { useEffect,useState } from 'react';
const TodoDate = () => {
    const [date,setdate]=useState("")

    useEffect(()=>{
        const date=  setInterval(() => {
              const dates=new Date();
              const currentdate=dates.toLocaleDateString();
              const time=dates.toLocaleTimeString();
              setdate(`${currentdate} - ${time}`)
            }, 1000);
            return ()=>clearInterval(date)
      },[]);
  return (
    <div>
        <h2>{date}</h2>
    </div>
  )
}

export default TodoDate
