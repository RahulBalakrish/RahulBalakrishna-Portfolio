import React from 'react'
import './About.css'
import {PiStudentFill} from 'react-icons/pi'
import {HiComputerDesktop} from 'react-icons/hi2'
import {FaUserGraduate} from 'react-icons/fa'
import ME from '../../Assests/RahulB.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
      <h5 className='getToKnow'>Get To Know</h5>
      <h2 className='AboutMe'>About Me</h2>
      <div className="container about__container">
          <div className="about__cards">
            <article className='about__card'>
            <br />
              <PiStudentFill className='about__experience__icon'/>
              <h5>Post Graduation</h5>
              <small>Sep 2023 - Current<br/>
Pursuing Master's in Information Systems <br/> Northeastern University, Boston, United States</small>
            </article>
            <article className='about__card'>
            <br />
              <HiComputerDesktop className='about__experience__icon'/>
              <h5>Experience</h5>
              <small>Jan 2021 - May 2022 <br/>
              1.5 years of Experience at Airbus <br/>
              contrated with Infosys as Software Engineer</small>
            </article>
          </div>
          <div className="about__cards">
            <article className='about__card'>
              <br />
              <FaUserGraduate className='about__experience__icon'/>
              <h5>Under Graduation</h5>
              <small>Aug 2016 - Jun 2020 <br/>
              Bachelors in Electrical and Electronics Engineering <br/>Ramaiah Institute of Technology <br/>Bangalore, India</small>
            </article>
            <article className='about__card'>
            <br />
              <HiComputerDesktop className='about__experience__icon'/>
              <h5>Experience</h5>
              <small> 1.3 years of Experience at Volvo Group <br/>
              contrated with Allegis Group, TEKsystems <br/>as Java Developer and Quality Assurance Tester </small>
            </article>
          </div>
          <div className="experience">
            <article className='about_me'>
            <p>Currently pursuing Master's in Information Systems at Northeastern University, with a strong background in electrical engineering from Ramaiah Institute of Technology. <br/> <br/>Java Developer at Volvo Group Connected Solutions (TekSystems) for 1.3 years, specializing in QA, feature development, and microservices testing. Skilled in successful load testing and event notifications implementation. 
            <br/><br/>Previous experience at Airbus Germany and UK (Infosys contract) for 1.5 years, excelling in Mainframe and Java development. Contributed to application support and data management, led a project extracting data from IMS databases, integrating into PostgreSQL with Spring Boot and Java.</p>
              </article>
            <article className='about_experience'>
            <div className="rahul_back">
              <img src={ME} alt="me" className='rahul' />
            </div>
            </article>
          </div>
            
      </div>
    </section>
  )
}

export default About