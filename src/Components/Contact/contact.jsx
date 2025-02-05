import React, { useRef } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const formRef=useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ae99d394-5c82-41a6-a567-8ead2bce9284");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form is submitted succesfully");
    }
  };

  function resetbtn(){
    formRef.current.reset();
  }

  return (
    <section className='contact'>
      <div className="heading">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-details">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p className='shortabout'>I'm Currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.  </p>
          <div className="personal-info">
            <p><span><FontAwesomeIcon icon={faEnvelope}/></span>gulshansaini0125@gmail.com</p>
            <p><span><FontAwesomeIcon icon={faPhoneVolume}/></span>+91 7014957196</p>
            <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Kotputli-Bahror(RAJ)</p>
          </div>
          <div className="social">
            <a href='https://www.linkedin.com/in/gulshan-saini-6769482b4/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href='https://github.com/SainiGulshan12/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
            <Link to='/' className='icon'><FontAwesomeIcon icon={faCode} /></Link>
            <a href='mailto:gulshansaini0125@gmail.com?subject=Hello%20Gulshan&body=I%20wanted%20to%20connect%20with%20you.' target='blank' className='icon'><FontAwesomeIcon icon={faEnvelope}/></a>
            <a href='https://web.whatsapp.com/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
          </div> 
        </div>
          <form className='contact-right'  ref={formRef} onSubmit={onSubmit}>
            <label htmlFor=''>Your Name  </label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor=''>Your Email  </label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor=''>Write your message here</label>
            <textarea className='textarea' placeholder='Enter your message' rows="8" name='message' required></textarea>
            <div className="btn">
              <button type='submit'>Submit Now</button>
              <button type='button' className='reset' onClick={resetbtn}>Reset form</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;