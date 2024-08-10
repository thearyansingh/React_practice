import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.svg'
import aryanss from '../../assets/aryanss.svg'
import aryan from "../../Images/aryan.png"
const Hero = () => {
  return (
    <>
      <section className='hero' id=''>
<img src={aryan} style={{height:"320px", width:"320px"}} alt="" />
<h1><span>I'm Aryan Singh , </span>Full Stack Developer.</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolor a quae nam facere optio sint iure reprehenderit </p>
    <div className="hero-action">
        <div className="hero-connect">
            Connect With Me
        </div>
        <div className="hero-resume">My Resume</div>
    </div>
    
      </section>
    </>
  )
}

export default Hero
