import React, { useState } from 'react';
import "./register.css"
const Register = () => {
    const [formdata,setForm]=useState({
        username:'',
        email:'',
        password:'',
        phone:''
    })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...formdata,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label htmlFor="username"><b>Username</b></label>
        <input
          type="text"
        name='username'
          placeholder="Enter Username"
         value={formdata.username}
         onChange={handleChange}
          required
        />

        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          name='email'
       value={formdata.email}
       onChange={handleChange}
          placeholder="Enter Email"
         
          required
        />

        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          name='password'
        value={formdata.password}
        onChange={handleChange}
          placeholder="Enter Password"
          
          required
        />

        <label htmlFor="phoneCode"><b>Phone Number</b></label>
        <br />
        <select
          
          required
        >
          <option selected hidden value="">Code</option>
          <option value="98">+98</option>
          <option value="99">+99</option>
          <option value="90">+90</option>
          <option value="66">+66</option>
        </select>
        <input
          type="phone"
        
          value={formdata.phone}
          name='phone'
     
          onChange={handleChange}
          required
        />

        <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

        <div className="clearfix">
          <button type="submit" className="btn">Sign Up</button>
        </div>
      </div>

      
    </form>
  );
};

export default Register;
