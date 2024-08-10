import React from 'react'
import "./services.css"
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from '../../assets/services_data'
import arrow_icon from "../../assets/arrow_icon.svg"
const Services = () => {
  return (
    <section className='services' id='service'>
<div className="services-title">
    <h1>My Services</h1>
    <img src={theme_pattern} alt="" />
    </div> 
    <div className="services-container">
        {Services_Data.map((services,index)=>{
     return <div key={index} className='services-format'>
<h3>{services.s_no}</h3>
<h2>{services.s_name}</h2>
<p>{services.s_desc}</p>
<div className="services-readmore">
    <p>Read More</p>
    <img src={arrow_icon} alt="" />
</div>
     </div>
        })}
        </div>    
    </section>
  )
}

export default Services
