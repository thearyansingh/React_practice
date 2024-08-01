import React, { useCallback, useEffect, useState, useRef } from 'react'
import "./App.css"
const App = () => {
    const [length, setLength]=useState(8)
    const [num, setNum]=useState(false);
    const [char, setChar]=useState(false);
    const [Password,setPassword]=useState("");
    const passwordRef=useRef(null);
const passwordGenerator=useCallback(()=>{
let  pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(num) str+='0123456789'
if(char) str+="!@#$%^&*(){}[]\?"
for (let index = 1; index < length; index++) {
  let newPassword= Math.floor(Math.random()*str.length+1);
  pass+=str.charAt(newPassword)
}
setPassword(pass)  

},[length,num,char,setPassword])
const passwordselect=()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
}

useEffect(()=>{
passwordGenerator()
},[length,char,num])
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
     value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
      />
      <button
     
     
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
     onClick={passwordselect}
     >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
     
       className='cursor-pointer'

        />
        <label>Length:{length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={num}
        id="numberInput"
        onChange={(e)=>setNum((prev)=>!prev)}
     
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
         defaultChecked={setChar}
            id="characterInput"
            onChange={(e)=>setChar((prev)=>!prev)}
        
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default App
