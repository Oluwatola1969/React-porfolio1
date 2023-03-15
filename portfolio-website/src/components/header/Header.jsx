import React from "react"
import "./header.css"
// import me from "../../assets/me.jpg"
import CTA from "./CTA"
import {Socials} from "./Socials"

const Header = () => {
  return (
    <div>
      <div className="header__container">
        <div className="me">
          <div className="me__overlay"></div>
        </div>
        <div className="header__content">
          <h5 className="text__light">I am </h5>
          <h2 className="text__pry name">Ojo Timilehin</h2>
          <h2>UI/UX Designer</h2>
          <CTA/>
          <Socials/>
          <a href="#contact">
            <div className="scroll__down">
              Scroll-down
            </div>
          </a>
        </div>

      </div>
    
    </div>
  )
}

export default Header