import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const StationL = ({data,lat,lon}) => {
    // console.log(data);

  return (

   <>
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
  

    <div>
      <h1>Stations List</h1>
        {data.map((shop, index) => (
          <li key={index}>
            <strong>{shop.name}</strong><br />
            {/* Lat: {shop.lat}, Lon: {shop.lon} */}
          </li>
        ))}
    </div>
    </>
  );
};

export default StationL;