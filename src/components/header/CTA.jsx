import React from 'react'
import ME from '../../Assests/RahulBalakrishna_SummerCoOp.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={ME} downlaod className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA