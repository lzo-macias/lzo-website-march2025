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
              <p>Called rich people and sold them fractional investment in blue-chip artworks by artists like Picasso and Monet. Explained a complicated technical platform for alternative investing and offered customer specific investment solutions on the platform.  Resulted in ~$200,000 in investment and an estimated ~$1,000,000 in LFV for Masterworks. Top performer in cohort of 20 advisors.</p>
              <div className='tags'>
                <span>Financial Advisor</span>
                <span>Outbound Sales</span>
                <span>Closing</span>
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
              <p>Called business owners and real estate agents to grow and maintain the 150+ SMB accounts at The Lawyer James. My two years at the firm resulted in upwards of $2M+ in new business at the company (150% of target) I also automated outreach and implemented a review and referral program driving 100+ 5 star Google reviews and improving SEO performance by 25%.</p>
              <div className='tags'>
                <span>Corporate Law</span>
                <span>B2B Sales</span>
                <span>Full Cycle Sales</span>
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
              <p>Sold Point-of-sale payment software systems to a large portfolio of Spanish and English speaking B2B prospects resulting in 4 closed deals generating ~$3000 of dollars in monthly recurring revenue. Managed lead generation, qualification, nurturing, and closes for a geographic sales territory spanning 15 NYC square miles.  And acted as a technical liaison, communicating API integration needs between clients and the developer team to enhance onboarding</p>
              <div className='tags'>
                <span>Outbound Sales</span>
                <span>Spanish</span>
                <span>Implementation</span>
                <span>API Integration</span>
                <span>Financial Technology</span>
                <span>POS Systems</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* CV Link */}
    <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer">
      <div className="project-link">
        <h3>Click to see CV <span>(minues 5 years of additional experience in nightlife and waiting tables)</span></h3>
        <img className='arrow' src="/img/arrow.png" alt="Arrow Icon" />
      </div>
    </a>
    </div>
    </Element>
  );
}

export default Experience
