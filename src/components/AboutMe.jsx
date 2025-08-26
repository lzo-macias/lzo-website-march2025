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
          closing 2M+ dollars in new business at 150% of target.  I automated outreach and implemented a referral and review program, building a pipeline from scratch and managing the full sales cycle. I also concurrently interned as a Solutions Engineer at 
          <a href='https://www.linkedin.com/company/wowpayments/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Wow Payments </a> 
          where I spent two months selling their POS product to NYC business owners, generating ~$3,000 in monthly recurring revenue and connecting POS's with external API's. Upon graduation I became a certified Financial Advisor and account manager at 
          <a href='https://www.masterworks.com/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Masterworks </a> 
          where I raised 1M+ in lifetime value for Masterworks and $200,000 in day one investment onboarding for a complex alternative investment platform at 125% of target.
        </p>

        <p>
          where i am today: In March of 2025 I graduated from the Full-Stack Web Development Bootcamp, where I took time to hone my technical proficiency as a developer and built teh social app 
          <a href='https://shenanigram.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> Shenanigram </a> 
          (full-stack).  And am now presently CEO and founder of           <a href='https://coolpeoplenyc.netlify.app/' 
          className='aboutmelinks' target="_blank" rel="noopener noreferrer"> CoolPeople </a>, a civic voting tool that uses scrapers and Ai to track local politics in NYC, demo out now. I am most passionate when I get to combine my knack for client management and people skills with my technical expertise. 
        </p>
    </div>
    </Element>
  );
}

export default AboutMe
