import React from 'react'
import './contact.css'
import { IoMail } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BiMessageCheck } from "react-icons/bi";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4ni19y', 'template_3io12ne', form.current, 'mOWe7Ni9V2cX4KdZX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact' className='contact'>
      <h5 className='getToKnow'>Get In Touch</h5>
      <h2 className='AboutMe'>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <IoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>balakrishna.ra@northeastern.edu</h5>
            <a href="mailto:balakrishna.ra@northeastern.edu" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineMessage className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Rahul Balakrishna</h5>
            <a href="https://www.linkedin.com/in/rahul--balakrishna/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
          <BiMessageCheck className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>RahulBalakrish</h5>
            <a href="https://github.com/RahulBalakrish?tab=repositories" target='_blank' >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" placeholder='Your Full Name' required/>
          <input type="email" name="Email" placeholder='Your Mail' required/>
          <textarea name="message" rows={7} placeholder='Your Message' require/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact