import React from 'react'
import '../styles/HeroHeader.css'

const HeroHeader = () => {
    const handleLocationClick = () =>{
        alert('Location access requested!')
    }
    
  return (
    <>
    <header>
        <div className='hero-content'>
            <h1>Discover Nearby EV Charging Stations Effortlessly</h1>
            <p>
            Our innovative app helps you find electric vehicle charging stations in your vicinity with just a tap. Allow location access to unlock real-time information on availability, ratings, and more.
            </p>
            <div className="buttons">
            <button className="cta-button" onClick={handleLocationClick}>Allow Location</button>
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