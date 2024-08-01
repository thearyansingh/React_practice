import React, { useState } from 'react'
import "./Toggle.css"
const Toggle = () => {
    const [isOn,setIson]=useState(false)
 const handleSearch=()=>{
    setIson(!isOn)
 }
  return (
    <div>
      <div className="outer-Switch" style={{backgroundColor:isOn ? "green":"red"}} onClick={handleSearch}>
        <div className={`inner-switch ${isOn?"on":"off"}`}>
            <span className='switch-state' >{isOn?"on":"off"}</span>
        </div>
      </div>
    </div>
  )
}
 
export default Toggle
