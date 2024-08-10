import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import uderline from "../../assets/nav_underline.svg"
const Navbar = () => {
  const [menu,setMenu]=useState("")
  return (
    <>
      <section className='Navbar'>
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
     <li><AnchorLink href="#Home" onClick={()=>setMenu("Home")} offset={50}><p>Home</p>{menu==="Home"?<img src={uderline} alt=''/>:<></>} </AnchorLink>  </li>
     <li><AnchorLink href="#about" onClick={()=>setMenu("about")}  offset={50}><p>About Us</p>{menu==="about"?<img src={uderline} alt=''/>:<></>}</AnchorLink>  </li>
     <li><AnchorLink href="#service" onClick={()=>setMenu("service")}  offset={50}><p> Services</p>{menu==="service"?<img src={uderline} alt=''/>:<></>}{menu==="Home"?<img src={uderline} alt=''/>:<></>}</AnchorLink>  </li>
     <li> <AnchorLink href="#mywork" onClick={()=>setMenu("work")}  offset={50}><p>Portfolio</p> {menu==="work"?<img src={uderline} alt=''/>:<></>}</AnchorLink></li>
     <li> <AnchorLink href="#mywork" onClick={()=>setMenu("contact")}  offset={50}><p>Contact</p> {menu==="contact"?<img src={uderline} alt=''/>:<></>}</AnchorLink></li>

        </ul>
        <div className="nav-connect">Connect With Me</div>
      </section>
    </>
  )
}

export default Navbar
