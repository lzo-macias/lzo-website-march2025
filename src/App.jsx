import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { createCursorGlow } from './components/CursorGlow';


import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

import './styling/App.css';

function App() {

  useEffect(() => {
    createCursorGlow(); // ✅ Initialize the glow effect when App mounts
  }, []);

  return (
    <>
    <div className='main_container'>
      <div className = 'bio_and_othersections'>
        <Bio/>
        <div className='othersections'>
          <AboutMe/>
          <Projects/>
          <Experience/>
        </div>

      </div>

    </div>
    {/* <Routes>\

    </Routes> */}
    </>
  )
}

export default App
