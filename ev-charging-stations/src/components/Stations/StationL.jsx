import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './StationL.css';
import { useNavigate } from 'react-router-dom';

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const StationL = ({data,lat,lon}) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

  return (
   <>
    <div className="back-button" onClick={handleBackClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
    </div>

    <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <MapContainer
        center={[lat ,lon]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[ lat ,lon]} icon={redIcon}>
          <Popup>You are here</Popup>
        </Marker> 
{
    data.map((val)=>(
        <Marker position={[ val.lat, val.lon]}>
          <Popup><a href="#" target='_blank'>{val.name}</a></Popup>
        </Marker> 
     ) )
}

      </MapContainer>
    </div>
  

    <div className='stationlis'>
        <div>
      <h1>Stations List</h1>
        {data.map((shop, index) => (
          <li key={index}>
            <strong>{shop.name}</strong><br />
            {/* Lat: {shop.lat}, Lon: {shop.lon} */}
          </li>
        ))}
        </div>
    
    <div>
        <h3 style={{color:"red"}}>Red is your current location</h3>
    </div>
    </div>
    </>
  );
};

export default StationL;