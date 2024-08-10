import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I'm a full stack developer  proficient in both front-end and back-end development, capable of designing and managing entire web applications, from the user interface to the server and database.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
            </div>
<div className="footer-subscribe">
    Subscribe
</div>
        </div>
      </div>

        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Aryan Portfolio</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
