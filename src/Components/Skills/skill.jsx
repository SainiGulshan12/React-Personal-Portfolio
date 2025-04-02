import React from 'react';
import './skill.css';
import {Link} from 'react-router-dom';
import iant from '../../assets/iant-logo.png';
import unified from '../../assets/unified1.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/JavaScript.png';
import react from '../../assets/react1.png';
import boots from '../../assets/boottstrap.png';

const Skill = () => {
  return (
    <section className='skill'>
        <div className="languages">
            <div className="icon">
              <img src={html} alt="HTML Logo" width='85px'/>
              <p>HTML5</p>
            </div>
            <div className="icon">
              <img src={css} alt="CSS Logo" width='95px'/>
              <p>CSS</p>
            </div>
            <div className="icon">
              <img src={js} alt="JavaScript Logo" width='135px'/>
              <p>JavaScript</p>
            </div>
            <div className="icon">
              <img src={react} alt="ReactJs Logo" width='110px' />
              <p>ReactJs</p>
            </div>
            <div className="icon">
              <img src={boots} alt="ReactJs Logo" width='95px' />
              <p>Bootstrap</p>
            </div>
        </div>
        <div className="experience">
              <div className='item'>
              <Link to='https://www.unifiedmentor.com/' target='blank'><img src={unified} alt="Unified Mentor" width='90px' /></Link>
                <div className="detail">
                  <h3>FrontEnd Developer Internship</h3>
                  <h3>(Unified Mentor)</h3>
                  <h4>Jan-2025, Remote</h4>
                  <p>Worked on Real World Projects</p>
                </div>
              </div>
              <div className='item'>
                <Link to='https://iantindia.com/' target='blank'><img src={iant} alt="Iant" width='100px'/></Link>
                <div className="detail">
                  <h3>Certified Software Programmer</h3>
                  <h3>(IANT)</h3>
                  <h4>2022-2024, Jaipur</h4>
                  <p>Learned Many Different Technologies</p>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Skill;