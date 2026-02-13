import React from 'react';
import { Element } from 'react-scroll';  // ✅ Import for scrolling
import { Link } from 'react-router-dom'; // ✅ Import for internal navigation
import "../styling/Projects.css";

function Projects() {
  return (
    <Element name="Projects"> {/* ✅ Added Element wrapper */}
    <div className='projectcontainer'>
      <h3 className='projectsheading'>ENTREPRENEURIAL</h3>

{/* CoolPeople Corporate External Link */}
    <a
        href="https://coolpeoplecorporate.vercel.app/#"
        className='projectLink'
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='CoolPeopleCorporate'>
          <div className='content'>
            <img src="/img/CoolPeopleCorporate.png" alt="CoolPeople Corporate App" />
            <div className='text_section'>
              <h3>CoolPeopleCorporate</h3>
              <p>Political strategy firm combining grassroots organizing with data-driven intelligence to drive voter engagement, mobilize communities, and win campaigns across NYC</p>
            </div>
          </div>
        </div>
      </a>

{/* CoolPeople External Link */}
    <a 
        href="https://coolpeoplenyc.netlify.app/" 
        className='projectLink' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className='CoolPeople'>
          
          <div className='content'>
            <img src="/img/CoolPeople.png" alt="CoolPeople App" />
            <div className='text_section'>
              <h3>CoolPeople</h3>
              <p>Tracker for local NYC politics, enter your address and see your ballot for 2025, ai stance analysis and candidate scoring, sign up for notifications, registration, and on App Store drop</p>
            </div>
          </div>
        </div>
      </a>

      {/* Shenanigram External Link */}
      <a 
        href="https://shenanigram.netlify.app/" 
        className='projectLink' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className='Shenanigram'>
          <div className='content'>
            <img src="/img/Shenanigram.png" alt="Shenanigram App" />
            <div className='text_section'>
              <h3>Shenanigram</h3>
              <p>Team lead on a new take on social media. Designed, managed, and developed with a team of 4 developers. Built with a PERN tech stack and suitable desktop.</p>
            </div>
          </div>
        </div>
      </a>

      {/* BookBuddy External Link */}
      {/* <a 
        href="https://github.com/lzo-macias/CareerSimulationBookBuddy.git" 
        className='projectLink' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className='BookBuddy'>
          <div className='content'>
            <img src="/img/BookBuddy.png" alt="BookBuddy App" />
            <div className='text_section'>
              <h3>BookBuddy</h3>
              <p>Solo development project for demo online bookstore. I used a test API provided by FullStack Academy to log books purchased and available. Secure password authentication among other features. Created with the React.</p>
            </div>
          </div>
        </div>
      </a> */}

      {/* ✅ Internal Link to Project Archive */}
      <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer">
  <div className="project-link">
    <h3>
      Click to see CV{" "}
    </h3>
    <img className="arrow" src="/img/arrow.png" alt="Arrow Icon" />
  </div>
</a>
    </div>
    </Element>
  );
}

export default Projects;
