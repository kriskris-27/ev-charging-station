import React, { useState } from 'react'
import './HeroHeader.css'
import { useNavigate } from 'react-router-dom';

const HeroHeader = ({data,setData ,setLat,setLon}) => {
    // console.log(data);
    
    const navigate =useNavigate();
    // const [location,setlocation]=useState(null);
    const handleLocationClick = () =>{
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
            alert("Unable to retrieve location.Please enable location access.")
        });
        } else{
            alert("Geolocation is not supported by this browser.")
        }
    };
    
    const sendtoback =(lat,lon) => {
        const backurl='https://starlietti-evps.onrender.com/api/testapi/locations';
        const range = 30; 
   
        fetch(backurl,{method:'POST',headers:{'Content-Type':'application/json',},
        body:JSON.stringify({range,lat,lon})
        })
        .then((response)=>response.json())
        .then((data)=>{console.log('Location sent succesfully',data);
        
            setData(data)
            // console.log(data);
            
            navigate("/location")
            
        })
        .catch((error)=>{
            console.log('Error sending location',error);
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
