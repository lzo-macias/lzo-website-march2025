import React from 'react'
import { Element } from 'react-scroll'; // ✅ Import Element for scroll targeting
import '../styling/AboutMe.css'

function AboutMe() {
  return (
    <Element name="About"> {/* ✅ Added Element wrapper */}
    <div className='aboutme'>
        <h3>ABOUT</h3>

        <p>
          where i started: The first 5 years of my work experience I spent in kitchens, bars, and catering halls. Though not as prestigious as some of my future job titles, they laid the foundation for the skills and work ethic that I would later be called for.
        </p>

        <p>
          where i went: In <a href='https://zicklin.baruch.cuny.edu/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer">college</a> I studied Computer Information Systems and Marketing and later became a Customer Success Manager at the corporate law firm 
          <a href='https://thelawyerjames.com' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> The Lawyer James,  </a> 
          generating 2M dollars in revenue and implementing a referral and review program producing 100+ reviews and 25% increased SEO performance. I also concurrently interned as a Solutions Engineer at 
          <a href='https://www.linkedin.com/company/wowpayments/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Wow Payments </a> 
          where I spent two months selling their POS product to NYC business owners, generating ~$3,000 in monthly recurring revenue. Upon graduation I became a certified Financial Advisor and Solutions Engineer at 
          <a href='https://www.masterworks.com/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Masterworks </a> 
          and raised 1M in lifetime value for Masterworks and $200,000 in day one investment for a securitized art product on a 6-month retainer.
        </p>

        <p>
          where i am today: In March of 2025 I graduated from the Full-Stack Web Development Bootcamp, where I was team lead on the new social media app 
          <a href='https://shenanigram.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Shenanigram </a> 
          (full-stack).  And am now presently building            <a href='https://coolpeoplenyc.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> CoolPeople </a>, a civic voting tool that uses scrapers and Ai to track local politics in NYC. I am most passionate when I get to combine my knack for client management and people skills with my technical expertise. 
        </p>
    </div>
    </Element>
  );
}

export default AboutMe
