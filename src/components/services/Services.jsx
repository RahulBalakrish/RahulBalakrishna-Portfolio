import React from 'react'
import './services.css'
import DBMS from '../../Assests/DBMS.png'
import FE from '../../Assests/EcommerceFrontEnd.jpeg'
import BE from '../../Assests/EcommerceBackEnd.jpeg'

const Services = () => {
  return (
    <section id='services'className='services_w'>
      <h2>My Personal Projects</h2>
      <div className='services__box'>
      <div className='container services__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={BE} alt="" />
          </div>
          <h4>E_Kart Website Back End</h4>
          <div className="portfolio__item-cta">
             <a href="https://github.com/RahulBalakrish/Ecommerce_Back_End" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
      <div className='container services__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={FE} alt="" />
          </div>
          <h4>E_Kart Website Front End</h4>
          <div className="portfolio__item-cta">
             <a href="https://github.com/RahulBalakrish/Ecommerce_Front_End" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
      <div className='container services__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DBMS} alt="" />
          </div>
          <h4>Telecommunication Management System</h4>
          <div className="portfolio__item-cta">
             <a href="https://github.com/RahulBalakrish/Group-15-DMDD-Assignment/tree/main/DMDD_Group15_P4" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
      </div>
      <div className='services__box_2'>
      <div className='container services__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={BE} alt="" />
          </div>
          <h4>E_Kart Website Back End</h4>
          <div className="portfolio__item-cta">
             <a href="https://github.com/RahulBalakrish/Ecommerce_Back_End" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
      </div>
    </section>
  )
}

export default Services