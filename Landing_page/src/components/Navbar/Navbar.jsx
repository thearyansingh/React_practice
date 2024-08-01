import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
           <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Location</li>
           
        </ul>
        <button className='login-button'>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
