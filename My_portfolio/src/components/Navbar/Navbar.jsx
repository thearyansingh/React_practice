import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
const Navbar = () => {
  return (
    <>
      <section className='Navbar'>
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
     <li>Home</li>
     <li>About Me</li>
     <li>Services</li>
     <li>Portfolio</li>
     <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
      </section>
    </>
  )
}

export default Navbar
