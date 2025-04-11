import React from 'react';
import './Events.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const Events = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="events-container">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </div>
                
                <div className="events-header">
                    <h1>Upcoming Events</h1>
                    <p>Stay tuned for exciting events and announcements</p>
                </div>

                <div className="events-message">
                    <div className="message-card">
                        <FaCalendarAlt className="calendar-icon" />
                        <h2>Coming Soon</h2>
                        <p>We're planning some exciting events to bring the EV community together. Stay connected with us to be the first to know about upcoming events, workshops, and networking opportunities.</p>
                        <p>Subscribe to our newsletter to receive updates about future events.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Events; 