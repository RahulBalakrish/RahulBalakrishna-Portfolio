import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSquareGithub} from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo'>@RahulBalakrish</a>
      <ul className='permalinks'>
        <li><a href="#" className='footer__tag'>Home</a></li>
        <li><a href="#about" className='footer__tag'>About</a></li>
        <li><a href="#experience" className='footer__tag'>Experience</a></li>
        <li><a href="#services" className='footer__tag'>Portfolio</a></li>
        <li><a href="#contact" className='footer__tag'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
      <a href="https://www.instagram.com/rahulyogi228/" target='_blank'><FiInstagram/></a>
      <a href="https://twitter.com/RahulBalakris" target='_blank'><IoLogoTwitter/></a>
      <a href="https://www.linkedin.com/in/rahul--balakrishna/" target='_blank'><AiFillLinkedin /></a>
        <a href="https://github.com/RahulBalakrish?tab=repositories" target='_blank'><FaSquareGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; @RahulBalakrish Portfolio. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer