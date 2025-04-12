import React, { useState, useEffect } from 'react';
import './Updates.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChargingStation } from 'react-icons/fa';

const Updates = () => {
    const navigate = useNavigate();
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await fetch('https://starlietti-evps.onrender.com/api/updates/stations');
                if (!response.ok) {
                    throw new Error('Failed to fetch updates');
                }
                const data = await response.json();
                setUpdates(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUpdates();
        // Set up polling to check for new updates every 5 minutes
        const interval = setInterval(fetchUpdates, 300000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
    
            <div className="updates-container">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </div>
                
                <div className="updates-header">
                    <h1>Latest Updates</h1>
                    <p>Stay informed about our latest charging station additions</p>
                </div>

                {loading ? (
                    <div className="loading-message">
                        <p>Loading updates...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>Error: {error}</p>
                    </div>
                ) : updates.length === 0 ? (
                    <div className="updates-message">
                        <div className="message-card">
                            <FaChargingStation className="station-icon" />
                            <h2>No Recent Updates</h2>
                            <p>There are no new charging station updates at the moment. Check back later for new additions to our network.</p>
                        </div>
                    </div>
                ) : (
                    <div className="updates-grid">
                        {updates.map(update => (
                            <div key={update._id} className="update-card">
                                <div className="update-category">New Station</div>
                                <div className="update-content">
                                    <h2>{update.name}</h2>
                                    <span className="update-date">
                                        Added: {new Date(update.createdAt).toLocaleDateString()}
                                    </span>
                                    <p>Location:South India</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        
        </>
    );
};

export default Updates; 