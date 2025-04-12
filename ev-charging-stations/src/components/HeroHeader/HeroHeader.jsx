import React, { useState } from 'react'
import './HeroHeader.css'
import { useNavigate } from 'react-router-dom';

const HeroHeader = ({data,setData ,setLat,setLon}) => {
    const [isLoading, setIsLoading] = useState(false);
    // console.log(data);
    
    const navigate =useNavigate();
    // const [location,setlocation]=useState(null);
    const handleLocationClick = () =>{
        setIsLoading(true);
        alert('Location access requested! To locate charging points')

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords;
                // setlocation({latitude,longitude});
                setLon(longitude);
                setLat(latitude);
                sendtoback(latitude,longitude);
            },
        (error)=>{
            setIsLoading(false);
            alert("Unable to retrieve location.Please enable location access.")
        });
        } else{
            setIsLoading(false);
            alert("Geolocation is not supported by this browser.")
        }
    };
    
    const sendtoback = (lat,lon) => {
        const backurl = 'https://starlietti-evps.onrender.com/api/testapi/locations';
        const range = 30; 
   
        fetch(backurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({range,lat,lon})
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data)=>{
            console.log('Location sent successfully', data);
            console.log(data);
            
            setData(data);
            navigate("/location");
        })
        .catch((error)=>{
            console.error('Error sending location:', error);
            alert("Error connecting to server. Please try again later.");
        });
    };
    
  return (
    <>
    <header>
        <div className='hero-content'>
            <h1>Discover Nearby EV Charging Stations Effortlessly</h1>
            <p>
            Our innovative app helps you find electric vehicle charging stations in your vicinity with just a tap. Allow location access to unlock real-time information on availability, ratings, and more.
            </p>
            <div className="buttons">
            <button 
                className="cta-button" 
                onClick={handleLocationClick}
                disabled={isLoading}
            >
                {isLoading ? 'SEARCHING...' : 'FIND CHARGING POINTS'}
            </button>
            <button 
                className="cta-button"
                onClick={() => navigate('/learn-more')}
            >
                Learn More
            </button>
            </div>
            
        </div>
        
        <div className='hero-div'>
            <img className='hero-header'></img>
            
        </div>
    </header>
    </>
  )
}

export default HeroHeader
