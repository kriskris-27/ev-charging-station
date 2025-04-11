import React from 'react';
import './LearnMore.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="back-button" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </div>

      <div className="learn-more-container">
        <div className="learn-more-header">
          <h1>Learn More About EV Charging</h1>
          <p>Everything you need to know about electric vehicle charging</p>
        </div>

        <div className="learn-more-content">
          <section className="info-section">
            <h2>Types of EV Charging</h2>
            <div className="charging-types">
              <div className="charging-type-card">
                <h3>Level 1 Charging</h3>
                <p>Standard 120V household outlet</p>
                <ul>
                  <li>Slowest charging option</li>
                  <li>Adds 3-8 km (2-5 miles) of range per hour</li>
                  <li>Best for overnight charging</li>
                </ul>
              </div>

              <div className="charging-type-card">
                <h3>Level 2 Charging</h3>
                <p>240V charging station</p>
                <ul>
                  <li>Most common public charging option</li>
                  <li>Adds 16-32 km (10-20 miles) of range per hour</li>
                  <li>Ideal for home and workplace charging</li>
                </ul>
              </div>

              <div className="charging-type-card">
                <h3>DC Fast Charging</h3>
                <p>High-power charging station</p>
                <ul>
                  <li>Fastest charging option</li>
                  <li>Adds 96-128 km (60-80 miles) of range in 20 minutes</li>
                  <li>Perfect for long-distance travel</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Charging Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>Best Charging Practices</h3>
                <ul>
                  <li>Charge when battery is between 20-80%</li>
                  <li>Avoid frequent fast charging</li>
                  <li>Plan charging stops for long trips</li>
                </ul>
              </div>

              <div className="tip-card">
                <h3>Cost Considerations</h3>
                <ul>
                  <li>Home charging is most economical</li>
                  <li>Public charging rates vary</li>
                  <li>Check for membership discounts</li>
                </ul>
              </div>

              <div className="tip-card">
                <h3>Maintenance</h3>
                <ul>
                  <li>Keep charging port clean</li>
                  <li>Regularly inspect cables</li>
                  <li>Follow manufacturer guidelines</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Environmental Impact</h2>
            <div className="environmental-info">
              <p>
                Electric vehicles significantly reduce greenhouse gas emissions compared to traditional vehicles. 
                The environmental benefits increase as the electricity grid becomes cleaner with renewable energy sources.
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <h3>Reduced Emissions</h3>
                  <p>Zero tailpipe emissions</p>
                </div>
                <div className="benefit-item">
                  <h3>Energy Efficiency</h3>
                  <p>More efficient than internal combustion engines</p>
                </div>
                <div className="benefit-item">
                  <h3>Sustainable Future</h3>
                  <p>Contributes to cleaner air and reduced carbon footprint</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearnMore; 