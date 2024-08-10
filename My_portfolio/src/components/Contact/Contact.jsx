import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const handlesubmit = async (event) => {
      event.preventDefault();
     
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5a3320e6-db90-4f99-867e-0f3760e8c918");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {

        console.log("submitted")
        setResult("");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <section className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
<h1>Let's talk</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium, consequatur tempore aliquid laborum officiis.</p>
       <div className="contact-details">
        <div className="contact-detail">
<img src={mail_icon} alt="" />
<p>singharyan5656@gmail.com</p>
        </div>
        <div className="contact-detail">
            <img src={call_icon} alt="" />
            <p>+918009017433</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Varanasi, UP ,India</p>
            </div>
       </div>
        </div>
        <form onSubmit={handlesubmit} className="contact-right">
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter your name ' name='name' />
<input type="email" name="email" placeholder='Enter your email' />
<label htmlFor="">Write your message here</label>
<textarea name="message" rows="8" placeholder='enter your message' ></textarea>
<button type='submit' className="contact-submit">
    Submit now
</button>
        </form>
      
      </div>
    </section>
  )
}

export default Contact
