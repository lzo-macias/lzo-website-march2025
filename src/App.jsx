import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createCursorGlow } from './components/CursorGlow';

import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectArchive from './pages/ProjectArchive';

import './styling/App.css';

function App() {

  useEffect(() => {
    createCursorGlow(); // ✅ Initialize the glow effect when App mounts
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='main_container'>
            <div className='bio_and_othersections'>
              <Bio />
              <div className='othersections' id="scroll-container">
                <AboutMe />
                <Experience />
                <Projects />
              </div>
            </div>
          </div>
        } />
        <Route path="/projectarchive" element={<ProjectArchive />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;