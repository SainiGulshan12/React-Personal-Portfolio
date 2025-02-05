import React from 'react';
import './project.css';
import restro from '../../assets/Restro.png';
import cal from '../../assets/calculator.png';
import gym from '../../assets/gym.png';
import portfolio from '../../assets/portfolio.png';


const Project = () => {
  return (
    <section className='project'>
      <div className="project-detail">
        <img src={restro} alt="Hotel & Resturents" />
        <div className="btn">
          <a href='https://omgrestro.netlify.app/' className='link' target='blank' rel="noopener noreferrer">Live Demo</a>
          <a href='https://github.com/SainiGulshan12/Hotel-Restaurents-Website.git' className='link' target='blank' rel="noopener noreferrer" >Source Code</a>
        </div>
      </div>
      <div className="project-detail">
        <img src={cal} alt="Calculator" />
          <div className="btn">
            <a href='https://dapper-mermaid-68900e.netlify.app/' className='link' target='blank' rel="noopener noreferrer">Live Demo</a>
            <a href='https://github.com/SainiGulshan12/basic-Calculator.git' className='link' target='blank' rel="noopener noreferrer">Source Code</a>
          </div>
      </div>
      <div className="project-detail">
        <img src={gym} alt="Gym Website" />
          <div className="btn">
            <a href='https://fitnessplusgym.netlify.app/' className='link' target='blank' rel="noopener noreferrer">Live Demo</a>
            <a href='https://github.com/SainiGulshan12/Fitness-Plus-Gym-Webapp.git' className='link' target='blank' rel="noopener noreferrer">Source Code</a>
          </div>
      </div>
      <div className="project-detail">
        <img src={portfolio} alt="Portfolio" />
          <div className="btn">
            <a href='https://res-my-portfolio.netlify.app/' className='link' target='blank' rel="noopener noreferrer">Live Demo</a>
            <a href='https://github.com/SainiGulshan12/Portfolio-Project' className='link' target='blank' rel="noopener noreferrer">Source Code</a>
          </div>
      </div>
    </section>
  )
}

export default Project;