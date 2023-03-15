import React from "react"
import './header.css'


const CTA = () => {
  return (
    <div className="button">
      <a href='/' className="btn" download target="_blank">Download CV</a>
      <a className="btn btn-primary" href="#contact" download target="_blank">Let's talk</a>
    </div>
  )
}

export default CTA