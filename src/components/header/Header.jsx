import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "..//../Assests/Rahul.png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div id = "Header_cont" className="container header__container">
       <div id='Introduction'>
         <h5 className= "Hello">Hello I'm</h5>
          <h1 className= "Rahul" >Rahul Balakrishna</h1>
         <h5 className="text-light" id='Description'>Software Developer | Cloud Engineering Enthusiast | Full Stack Developer</h5>
          <CTA />
        </div>
        
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        </div>
      
    </header>
  )
}

export default Header