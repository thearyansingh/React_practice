import React from 'react'

const EVH = () => {
const handleUser=(value)=>{
    alert(`welcome ${value}`);
}
const handleHover=()=>{
    alert("thanks for clicking")
}

  return (
    <div>
     <WelcomeUser
    OnButtonClick={()=>handleUser("aryan")}
    onMouseEnter={handleHover}

     />
    </div>
  )
}

const WelcomeUser=(props)=>{
const{OnButtonClick,onMouseEnter}=props
return(
    <>
 <button onClick={OnButtonClick}>click me</button>
 <button onMouseEnter={onMouseEnter} > hover me</button>    
    </>
)
}

export default EVH
