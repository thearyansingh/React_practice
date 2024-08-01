import React, {useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(() => {
     fetch("https://api.github.com/users/thearyansingh")
     .then((res)=>res.json())
     .then((data)=>{console.log(data)
        setData(data)
     }
    )
  
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 text-white
    p-4 text-3xl '>
      Github Followers:{data.followers}
    </div>
  )
}

export default Github
