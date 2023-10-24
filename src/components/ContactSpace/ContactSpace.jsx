import React from 'react';
import '../ContactSpace/ContactSpace.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactSpace = () => {
  const form = useRef();
  const handleContSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fk12kkh', 'template_zj8ncsg', form.current, 'k5eLP4B6iUEV1PEsh')
      .then((result) => {
          console.log(result.text);
          alert("Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section className="contact-container">
      <div className="contact-logo">
      <img style={{width:"70px"}} className="gb-logo" src="https://ik.imagekit.io/mtmwll7w3/images/logoGBfin.png?updatedAt=1698121417788" alt="logo" />
      </div>
      <form className="contact-form " ref={form} onSubmit={handleContSubmit}>
        <div className="heading-cont">
          <h2>CONTACT US</h2>
          <p>feel free to reach out to us, we'd love to hear from you!</p>
        </div>
        <div className="input">
          <input name="username" type="text" placeholder="Username" />
        </div>
        <div className="input">
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="input">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            style={{resize: "none"}}
          ></textarea>
        </div>
        <button className="button"  type="submit" >Submit</button>
      </form>
      <div className="contact-info">
        <h3 className="heading">VISIT US</h3>
        <ul className="contacts">
          <li>         
            Gamer's Burnout, Sector-DS, Chandralok, Lucknow, Uttar Pradesh Pin - 226024
          </li>
          <li>     
            info@gamersburnout.com
          </li>
          <li>
            +91 870-7493108
          </li>
        </ul>
        <div className="social-links"></div>
      </div>
    </section>
    </>
  )
}

export default ContactSpace
