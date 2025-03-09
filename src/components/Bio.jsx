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
                    <ScrollLink to="about" smooth={true} duration={500}>ABOUT</ScrollLink>
                </div>
                <div className="nav-item">
                    <div className="design-line"></div>
                    <ScrollLink to="sales" smooth={true} duration={500}>PROJECTS</ScrollLink>
                </div>
                <div className="nav-item">
                    <div className="design-line"></div>
                    <ScrollLink to="projects" smooth={true} duration={500}>EXPERIENCE</ScrollLink>
                </div>
            </nav>
            <div className='socials'>
                <img className="social-icon" src="../public/img/github.png" alt="" />
                <img className="social-icon" src="../public/img/linkedin.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Bio