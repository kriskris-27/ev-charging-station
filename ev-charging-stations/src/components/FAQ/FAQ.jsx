import React, { useState } from 'react';
import './FAQ.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to charge an electric vehicle?",
      answer: "Charging time depends on the type of charger and your vehicle's battery capacity. Level 1 charging (120V) can take 8-20 hours for a full charge, Level 2 (240V) typically takes 4-8 hours, while DC Fast Charging can provide 80% charge in 20-30 minutes."
    },
    {
      question: "How much does it cost to charge an electric vehicle?",
      answer: "The cost varies based on electricity rates and charging location. Home charging typically costs $0.10-$0.20 per kWh, while public charging stations may charge $0.30-$0.60 per kWh. On average, it's significantly cheaper than gasoline."
    },
    {
      question: "What types of charging connectors are available?",
      answer: "Common connectors include Type 1 (J1772) for Level 1/2 charging, CCS Combo for DC fast charging, CHAdeMO for Japanese vehicles, and Tesla's proprietary connector. Most new vehicles in North America use CCS Combo."
    },
    {
      question: "Can I install a home charging station?",
      answer: "Yes, most EV owners can install a Level 2 home charging station. You'll need a 240V outlet and may require an electrician for installation. Check with your local utility for possible rebates or incentives."
    },
    {
      question: "How do I find charging stations while traveling?",
      answer: "Our app helps you locate nearby charging stations. You can filter by charging speed, connector type, and availability. The app also shows real-time status and user reviews."
    },
    {
      question: "What is the range of electric vehicles?",
      answer: "Modern EVs typically offer 200-400 km (125-250 miles) of range on a full charge. Some premium models can exceed 500 km (310 miles). Range varies based on driving conditions, speed, and weather."
    },
    {
      question: "How do I maintain my EV's battery?",
      answer: "Best practices include keeping the battery between 20-80% charge for daily use, avoiding extreme temperatures when possible, and following the manufacturer's maintenance schedule. Fast charging should be used sparingly."
    },
    {
      question: "Are there any government incentives for EV ownership?",
      answer: "Many governments offer incentives such as tax credits, rebates, and reduced registration fees for EV owners. Check with your local and national government websites for current programs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="back-button" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </div>

      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about electric vehicle charging</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>Contact our support team for more information</p>
          <button className="contact-button" onClick={() => navigate('/contact-support')}>
            Contact Support
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ; 