import React from 'react'
import './navbar.css'
import { useState } from 'react'

const Navbar = () => {
const[activeNav, setActiveNav] = useState('#home')
  return (
    <div className='nav__container'>
      <h1 className='logo'><a href="/">Ojo Timilehin</a></h1>
      <div >
        <ul className='nav__links'>
          <li>
            <a href="#home" onClick={()=>{setActiveNav('#home')}} onScroll={()=>{setActiveNav('#home')}} className={activeNav === '#home'? 'active': ''} rel='noreferrer noopener' >Welcome</a>
          </li>
          <li>
            <a href="#about" onClick={()=>{setActiveNav('#about')}} onScroll={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active': ''} rel='noreferrer noopener'>About</a>
          </li>
          <li>
            <a href="#experince" onClick={()=>{setActiveNav('#experience')}}  onScroll={()=>{setActiveNav('#experience')}}className={activeNav === '#experience'? 'active': ''} rel= 'noreferrer noopener'>Experience</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>{setActiveNav('#contact')}} onScroll={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active': ''} rel= 'noreferrer noopener'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar