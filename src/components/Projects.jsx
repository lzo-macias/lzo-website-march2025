import React from 'react'
import { Element } from 'react-scroll'; // ✅ Import Element
import "../styling/Projects.css"

function Projects() {
  return (
    <Element name="Projects"> {/* ✅ Added Element wrapper */}
    <div className='projectcontainer'>
      <h3 className='projectsheading'>PROJECTS</h3>
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
              <p>Team lead on a new take on social media. Designed, managed, and developed with a team of 4 developers. Built with a PERN tech stack and suitable for both mobile and desktop.</p>
            </div>
          </div>
        </div>
      </a>

      <a 
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
      </a>

      {/* Final Line with Arrow and H3 on the Same Line */}
      <div className="project-link">
        <h3>Click to see full project archive</h3>
        <img className='arrow' src="img/arrow.png" alt="Arrow Icon" />
      </div>
    </div>
    </Element>
  );
}

export default Projects
