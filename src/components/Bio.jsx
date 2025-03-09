import React from 'react'
import { Link as ScrollLink } from 'react-scroll'; // ✅ Import for scrolling
import '../styling/Bio.css';

function Bio() {
  return (
    <div className='bio'>
        <h2 className='bio_name'>LORENZO MACIAS</h2>
        <h3 className='bio_role'>Full Stack Developer And Sales Architect</h3>
        <p>I combine tech and business, using my technical knowledge to further business interests.</p>
        <div>
            <nav>
                <div className="nav-item">
                    <div className="design-line"></div>
                    <ScrollLink to="About" smooth={true} duration={500} offset={-50}>ABOUT</ScrollLink>
                </div>
                <div className="nav-item">
                    <div className="design-line"></div>
                    <ScrollLink to="Projects" smooth={true} duration={500} offset={-50}>PROJECTS</ScrollLink>
                </div>
                <div className="nav-item">
                    <div className="design-line"></div>
                    <ScrollLink to="Experience" smooth={true} duration={500} offset={-50}>EXPERIENCE</ScrollLink>
                </div>
            </nav>
            <div className='socials'>
                <a 
                    href="https://github.com/lzo-macias" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                     className="social-icon" 
                        src="../public/img/github.png" 
                        alt="GitHub Profile" 
                    />
                </a>

                <a 
                 href="https://www.linkedin.com/in/lorenzomacias/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        className="social-icon" 
                        src="../public/img/linkedin.png" 
                        alt="LinkedIn Profile" 
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Bio