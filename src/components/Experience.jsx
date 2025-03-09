import React from 'react'
import { Element } from 'react-scroll'; // ✅ Import Element
import '../styling/Experience.css'

function Experience() {
  return (
    <Element name="Experience"> {/* ✅ Added Element wrapper */}
    <div className='experiencediv'>
      <h3 className='experienceheading'>EXPERIENCE</h3>
      {/* Masterworks */}
      <a 
        href="https://www.masterworks.io/" 
        className='experienceLink'
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='Masterworks'>
          <div className='content'>
            <div className='date'>2024 6 month retainer</div>
            <div className='text_section'>
              <h3>Masterworks <span className='position'>• Financial Advisor</span></h3>
              <p>Called rich people and sold them fractional investment in blue-chip artworks by artists like Picasso and Monet. Resulted in ~$150,000 in investment and an estimated ~$1,000,000 in LFV for Masterworks. Top performer in cohort of advisors.</p>
              <div className='tags'>
                <span>Financial Advisor</span>
                <span>Outbound Sales</span>
                <span>Spanish</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* The Lawyer James */}
      <a 
        href="https://thelawyerjames.com/" 
        className='experienceLink'
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='TheLawyerJames'>
          <div className='content'>
            <div className='date'>2022-2024</div>
            <div className='text_section'>
              <h3>The Lawyer James <span className='position'>• Sales Representative</span></h3>
              <p>Called business owners and real estate agents to grow and maintain the book of business at The Lawyer James. My two years at the firm resulted in upwards of $600,000 in closed business. I also implemented a review and referral program driving new business.</p>
              <div className='tags'>
                <span>Corporate Law</span>
                <span>Sales</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* GaoTek */}
      <a 
        href="https://gaotek.com/" 
        className='experienceLink'
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='GaoTek'>
          <div className='content'>
            <div className='date'>2023 three month retainer</div>
            <div className='text_section'>
              <h3>GaoTek <span className='position'>• Marketing Associate</span></h3>
              <p>Created, edited, and published inbound marketing content promoting ~20 product offerings to a variety of industries, ranging from paper manufacturing to airline industries.</p>
              <div className='tags'>
                <span>Copywriting</span>
                <span>Marketing</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Wow Payments */}
      <a 
        href="https://www.linkedin.com/company/wowpayments/posts/?feedView=all" 
        className='experienceLink'
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='WowPayments'>
          <div className='content'>
            <div className='date'>2023 four month retainer</div>
            <div className='text_section'>
              <h3>Wow Payments <span className='position'>• Sales Representative</span></h3>
              <p>Sold Point-of-sale payment software systems to a large portfolio of Spanish and English speaking B2B prospects resulting in 4 closed deals generating ~$3000 of dollars in monthly recurring revenue. Managed lead generation, qualification, nurturing, and closes for a geographic sales territory spanning 15 NYC square miles.</p>
              <div className='tags'>
                <span>Outbound Sales</span>
                <span>Spanish</span>
                <span>Financial Technology</span>
                <span>POS Systems</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* CV Link */}
      <div className="project-link">
        <h3>Click to see CV <span>(detailed and 5 years of additional experience in nightlife and waiting tables)</span></h3>
        <img className='arrow' src="../public/img/arrow.png" alt="Arrow Icon" />
      </div>
    </div>
    </Element>
  );
}

export default Experience
