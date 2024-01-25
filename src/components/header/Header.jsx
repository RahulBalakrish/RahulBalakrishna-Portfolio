import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "..//../Assests/Rahul.png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section className='header_section'>
      <div id = "Header_cont" className="container header__container">
        <div className='header_cards'>
        <article id='Introduction'>
         <h5 className= "Hello">Hello I'm</h5>
          <h1 className= "Rahul" >Rahul Balakrishna</h1>
         <h5 className="text-light" id='Description'>Software Developer | Cloud Engineering Enthusiast | Full Stack Developer</h5>
          <CTA />
        </article>
        <article id='socialPhoto'>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocial />
        </article>
        </div>
        </div>
      </section>
    </header>
  )
}

export default Header