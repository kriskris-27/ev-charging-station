import React from 'react';
import './Support.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaEnvelope, FaQuestionCircle, FaComments } from 'react-icons/fa';

const Support = () => {
    const navigate = useNavigate();

    const supportOptions = [
        {
            id: 1,
            title: "24/7 Customer Support",
            description: "Our dedicated support team is available around the clock to assist you with any issues or questions.",
            icon: <FaPhone />,
            contact: "+1 (800) 123-4567"
        },
        {
            id: 2,
            title: "Email Support",
            description: "Send us an email and we'll get back to you within 24 hours.",
            icon: <FaEnvelope />,
            contact: "support@evcharging.com"
        },
        {
            id: 3,
            title: "FAQ Section",
            description: "Find answers to common questions about our services and EV charging.",
            icon: <FaQuestionCircle />,
            link: "/faqs"
        },
        {
            id: 4,
            title: "Live Chat",
            description: "Chat with our support team in real-time for immediate assistance.",
            icon: <FaComments />,
            action: "Start Chat"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="support-container">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </div>
                
                <div className="support-header">
                    <h1>Support Center</h1>
                    <p>We're here to help you with any questions or issues you may have</p>
                </div>

                <div className="support-grid">
                    {supportOptions.map(option => (
                        <div key={option.id} className="support-card">
                            <div className="support-icon">
                                {option.icon}
                            </div>
                            <div className="support-content">
                                <h2>{option.title}</h2>
                                <p>{option.description}</p>
                                {option.contact && (
                                    <a href={`tel:${option.contact}`} className="contact-link">
                                        {option.contact}
                                    </a>
                                )}
                                {option.link && (
                                    <a href={option.link} className="contact-link">
                                        Visit FAQ Page
                                    </a>
                                )}
                                {option.action && (
                                    <button className="action-btn">
                                        {option.action}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Support; 