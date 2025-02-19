import React, { useState } from 'react'
import './HeroHeader.css'

const HeroHeader = () => {
    const [location,setlocation]=useState(null);
    const handleLocationClick = () =>{
        alert('Location access requested! To locate charging points')

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const {lat,lon} = position.coords;
                setlocation({lat,lon})
            },
        (error)=>{
            alert("Unable to retrieve location.Please enable location access.")
        });
        } else{
            alert("Geolocation is not supported by this browser.")
        }
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
            <button className="cta-button" onClick={handleLocationClick}>FIND CHARGING POINTS </button>
            <button className="cta-button">Learn More</button>
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