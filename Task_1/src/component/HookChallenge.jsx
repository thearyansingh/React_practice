import { useState } from "react"



const HookChallenge = () => {
    const [users, setUser]=useState([
        {sno:1,name:"aryan" ,age:32},
        {sno:2,name:"hello", age:39},
        {sno:3,name:"hiee", age:23},
        {sno:4,name:"sfsdf",age:23}
    ])
  return (
    <div className="main-div">
        <h1>users List</h1>
        <ul>
         {users.map((e)=>(
            <li key={e.sno}>
             <h3>name:{e.name}</h3>
             <p>age:{e.age}</p>
            </li>
         ))}   
            
        </ul> 
      
    </div>
  )
}

export default HookChallenge
