import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div>
   <div className="Hero">
    <div className="hero-content">
<h1>YOUR FEET DESERVE THE ONE</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
<div className="shop-button">
    <button className='shop'>Show Now</button>
    <button className='shop'>Category</button>

</div>
<div className="social">
    <p>Also Available On</p>
    <div className="social-apps">
        <img src="/images/flipkart.png" alt="" />
        <img src="/images/amazon.png" alt="" />
    </div>
</div>
    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
    </div>
   </div>
    </div>
  )
}

export default Hero
