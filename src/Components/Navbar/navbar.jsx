import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMultiply, faStream } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [ismenuopen, setmenuopen] = useState(false);
  
  const toggle = ()=>{
    setmenuopen(!ismenuopen);
  };

  return (
    <div className='navbar'>
        <div className='logo'>
            <p>Portfolio </p> 
        </div>
        {!ismenuopen&&
          <div className="mob-menu" onClick={toggle}>
            <FontAwesomeIcon icon={faStream} className='bar-icon'/>  
          </div> 
        }
        <div className={`nav-links ${ismenuopen ? 'show' : ''}`}>  
          <div className="mob-menu" onClick={toggle}>
            <FontAwesomeIcon icon={faMultiply} className='cross'/>  
          </div>              
            <NavLink className='link' to='/' activeClass='active'>Home</NavLink>
            <NavLink className='link' to='/about' activeClass='active'>About Me</NavLink>
            <NavLink className='link' to='/skill' activeClass='active'>Skills</NavLink>
            <NavLink className='link' to='/project' activeClass='active'>Projects</NavLink>
            <NavLink className='link' to='/contact' activeClass='active'>Contact</NavLink>
        </div>
        <NavLink to='/contact' className='contactme'>Contact With Me</NavLink>
    </div>
  )
}

export default Navbar;
