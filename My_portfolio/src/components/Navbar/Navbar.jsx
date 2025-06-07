import React, {useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from "../../assets/nav_underline.svg";
import theme_pattern from '../../assets/theme_pattern.svg';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from 'react';
const Navbar = () => {

  const menuRef  = useRef();
const open=()=>{
  menuRef.current.style.right="0"
}
const close=()=>{
  menuRef.current.style.right="-350px"
}
 
  return (
    <>
      <section className='Navbar'>
        <div className="logo">
          <h1>AryAN</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <img src={menu_open} alt="menu open"  className='nav-mob-open' onClick={open} />
        <ul className="nav-menu" ref={menuRef}>
          <img className='nav-mob-close' src={menu_close} alt="menu close" onClick={close} />
          <li>
            <AnchorLink href="#Home" offset={50}>
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" >
              About Us
             
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#service">
              Services
             
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#mywork" >
              Portfolio

            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" >
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
      </section>
    </>
  );
};

export default Navbar;
