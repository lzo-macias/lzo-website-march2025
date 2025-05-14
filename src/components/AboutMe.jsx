import React from 'react'
import { Element } from 'react-scroll'; // ✅ Import Element for scroll targeting
import '../styling/AboutMe.css'

function AboutMe() {
  return (
    <Element name="About"> {/* ✅ Added Element wrapper */}
    <div className='aboutme'>
        <h3>ABOUT</h3>

        <p>
          where i started: The first 5 years of my work experience I spent in kitchens, bars and catering halls. Though not as prestigious as some of my future job titles, they laid the foundation for the skills and work ethic that I would later be called for.
        </p>

        <p>
          where i went: In <a href='https://zicklin.baruch.cuny.edu/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer">college</a> I studied Computer Information Systems and Marketing. I got a job as a sales rep at the small corporate law firm 
          <a href='https://thelawyerjames.com' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> The Lawyer James </a> 
          and concurrently interned with several other tech companies.  Most notably 
          <a href='https://www.linkedin.com/company/wowpayments/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Wow Payments </a> 
          where I spent 4 months selling their POS product to NYC business owners. Upon graduation I became a certified Financial Advisor at 
          <a href='https://www.masterworks.com/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Masterworks </a> 
          and raised ~$200,000(1 million in LFV) in investment for a securitized art product on a 6-month retainer.
        </p>

        <p>
          where i am today: In March of 2025 I graduated the Full-Stack Web Development Bootcamp, where I was team lead on the new social media app 
          <a href='https://shenanigram.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Shenanigram </a> 
          (fullstack).  I then continued honing my skills building           <a href='https://coolpeoplenyc.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> CoolPeople </a> which uses scrapers and LLM's to track local politics in NYC. I am most passionate about building projects that not only present well visually but follow development principles for security and organization. For fun I solve puzzles on AlgoExpert, cook, and on occasion maybe even a nightclub if my friends put me up to it.
        </p>
    </div>
    </Element>
  );
}

export default AboutMe
