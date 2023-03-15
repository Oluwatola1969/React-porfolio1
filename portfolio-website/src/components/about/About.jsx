// import React from 'react'
import './about.css'
import cv from '../../assets/cv.pdf'

const About = () => {
  return (
    <section id="about">
      <div className="about__container container">
        <h2>About me</h2>
        <h4>My works and more</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi harum aliquid, omnis, quos qui doloribus quam eligendi, animi saepe ex expedita. Unde esse temporibus voluptates modi expedita eaque culpa. Explicabo! <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, doloribus culpa? Adipisci numquam nesciunt ex? Ad libero dolore minus dignissimos perferendis.</p>

        <div className="aboutMe__card">
          <div className="card__content">
            <h2>12+</h2>
            <h4>PROJECT COMPLETED</h4>
          </div>
          <div className="card__content">
            <h2>42+</h2>
            <h4>HAPPY CLIENT</h4>
          </div>
          <div className="card__content">
            <h2>37+</h2>
            <h4>POSITIVE REVIEWS</h4>
          </div>
        </div>
        
      <a href={cv} download className="aboutMe__btn">DOWNLOAD CV</a>
      </div>

      
    </section>
  )
}

export default About;