import React from 'react'
import './About.css'
import {PiStudentFill} from 'react-icons/pi'
import {HiComputerDesktop} from 'react-icons/hi2'
import {FaUserGraduate} from 'react-icons/fa'
import ME from '../../Assests/RahulB.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
            <p>I am currently pursuing my Master of Science in Information Systems at Northeastern University, where I am learning the latest technologies and best practices in information science and studies. I have a strong background in electrical and electronics engineering, having completed my Bachelor of Engineering at Ramaiah Institute of Technology. <br /><br/>I am a multi-dimensional professional with great logical and analytical skills, and a passion for solving complex problems and creating value with technology. My commitment to excellence, technical acumen, and innovative spirit define my contribution to advancing technology in dynamic environments. 
          I am always eager to learn new skills and explore new challenges, and I aspire to become a leader and a mentor in my field. <br /><br />
            Having an experience as a Java Developer at Volvo Group Connected Solutions through TekSystems for 1.3 years, I specialize in quality assurance, feature development and integration testing for microservices in connected solutions. My expertise includes successful load testing, feature implementation for event notifications and integration Testing. <br/> <br/> 
          Previously, at Airbus Germany and UK through a contract with Infosys for 1.5 years, I excelled in Mainframe and Java development, contributing to application support and data management. I showcased innovation by leading a project to extract data from IMS databases, integrating it into PostgreSQL using Spring Boot and Java.  </p>
            </article>
            <article className='about_experience'>
            <div className="me">
              <img src={ME} alt="me" className='rahul' />
            </div>
            </article>
          </div>
            
      </div>
    </section>
  )
}

export default About