import React from 'react';
import './Aboutus.css'; 

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
        <div className="about-us-pb">

        
      {/* Header Section */}
      <section className="header-section">
        <h1>About Us</h1>
        <p>Welcome to Starlietti—the ultimate platform for finding EV charging stations wherever your journey takes you. We're on a mission to simplify your electric driving experience by connecting you with reliable, accessible, and up-to-date charging solutions..</p>
      </section>
      <hr></hr>

     
      <section className="company-overview">
        <h3>Our Mission</h3>
        <p>At Starlietti, we aim to accelerate the transition to sustainable transportation by providing a user-friendly, data-driven tool that empowers EV drivers. Our goal is to make every journey stress-free and eco-friendly by ensuring you have the best information on charging station locations, availability, and pricing right at your fingertips.</p>

        <hr></hr>

        <h3>What We Do</h3>
        <p>Interactive Maps: Easily locate nearby charging stations with our dynamic, user-friendly maps and many more .</p>

        <hr></hr>

        <h3>Join Us on the Journey</h3>
        <div className="lis">
        <p>Every charge brings us one step closer to a sustainable tomorrow. We invite you to join our community of eco-conscious drivers and be part of a movement that's redefining the way we power our lives.</p>
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
