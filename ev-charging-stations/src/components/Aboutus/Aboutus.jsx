import React from 'react';
import './Aboutus.css'; 

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
        <div className="about-us-pb">

        
      {/* Header Section */}
      <section className="header-section">
        <h1>About Us</h1>
        <p>We are on a mission to make sustainable energy accessible for everyone.</p>
      </section>
      <hr></hr>

      {/* Company Overview Section */}
      <section className="company-overview">
        <h1>Our Mission</h1>
        <p>We provide cutting-edge EV charging solutions to make the transition to electric vehicles easier and more accessible for everyone.</p>

        <hr></hr>

        <h3>Our Vision</h3>
        <p>Our vision is to build a global network of accessible, reliable, and eco-friendly charging stations.</p>

        <hr></hr>

        <h3>Our Values</h3>
        <div className="lis">
        <ul>
          <li>Sustainability</li>
          <li>Innovation</li>
          <li>Customer-first</li>
        </ul>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta">
        <p>Join us on our mission to revolutionize the way the world charges electric vehicles.</p>
        <button>Contact Us</button>
      </section>
      </div>
     
    </div>
  );
};

export default AboutUsPage;
