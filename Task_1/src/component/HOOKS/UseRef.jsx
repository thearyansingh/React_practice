import React, { useRef } from 'react'

const UseRef = () => {
    const username=useRef(null)
    const password=useRef(null)

const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(username.current.value, password.current.value)
}
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input type="" ref={username} />
        <br />
        <input type=""  ref={password}/>
        <button >click</button>

      </form>

    </div>
  )
}

export default UseRef
