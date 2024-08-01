import { useContext, useState } from "react"
import React from 'react'
import UserContext from "./context/UserContext"
const Login = () => {
     const [userName, setuserName] = useState("")
     const [password, setpassword] = useState("")
     const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
   e.preventDefault()
   setUser({userName,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text"
      value={userName}
      onChange={(e)=>setuserName(e.target.value)}
      placeholder="email"  />
      <input type="text" placeholder="password"
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
