import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSquareGithub} from 'react-icons/fa6'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/rahul--balakrishna/" target='_blank'><AiFillLinkedin size={40}/></a>
        <a href="https://github.com/RahulBalakrish?tab=repositories" target='_blank'><FaSquareGithub size={40}/></a>
    </div>
  )
}

export default HeaderSocials