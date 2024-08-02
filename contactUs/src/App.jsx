
import React, { useState } from "react"
import "./App.css"
function App() {
  const[data,setData]=useState({
    name:'',
    email:'',
    text:'',
  })
 
 const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(data)
 }
 const handlechange=(e)=>{
  const{name,value}=e.target
  setData({...data,[name]:value})
 }

 
    return (
      <div>
        <div className="container">
        <h1>CONTACT US</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias vero harum, consectetur aperiam qui corrupti.</p>
       <div className="contact_section">
          <div className="content_section">
  <div className="call">
  <button className='support'>VIA SUPPORT CHAT</button>
  <button className='via'>VIA CALL</button>
  </div>
  <button className="form">VIA EMAIL FORM</button>
  <form onSubmit={handlesubmit}>
 
      <div className="form-container">
      <label htmlFor="name">Name</label>
      <input type="text" name='name' value={data.name}onChange={handlechange} />
  
      </div>
      <div className="form-container">
      <label htmlFor="email">Email</label>
      <input type="text" name='email'value={data.email}onChange={handlechange} />
  
      </div>
      <div className="form-container">
      <label htmlFor="Text">Text</label>
      <textarea name='text' rows="8"value={data.text}onChange={handlechange} />
  
      </div>
      <div style={{display:"flex",justifyContent:"end"}}>
     
        <button className="support">Submit</button>
      </div>
  </form>

  
  
          </div>
          <div className="image_section">
  <img src="\public\Service 24_7-pana 1.svg" alt="contactImage" />
          </div>
  
       </div>
        </div>
    
      </div>
    )
  
}

export default App
