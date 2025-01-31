import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Typed from 'typed.js';
import myimage from '../../assets/myimg.jpg'

const Home = () => {
  useEffect(() => {
    const typingelement = document.querySelector('.typing');
    if (typingelement) { 
      const typed = new Typed(typingelement, {
        strings: ["","","I'm Gulshan Saini"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className='home'>
      <img src={myimage} alt="myimage" />
        <h1>Hello,<span className='typing'></span>, Frontend Developer</h1>
        <p>I am a dedicated frontend developer with skills in HTML, CSS, JavaScript, ReactJS. I'm a Fresher.</p>
        <div className="btn">
          <Link to='/contact'><button className='contact'>Contact With Me</button></Link>
          <Link to='https://drive.google.com/file/d/11d8Tp_LQnZLGU7cucToZ8eRbNDj7zTxd/preview' target='blank' ><button className='resume'>My Resume</button></Link>
        </div> 
    </section>
  )
}

export default Home;