import React from "react"
import Header from "../src/components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Contact from "../src/components/contact/Contact"

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Contact />
    </>
  )
}

export default App