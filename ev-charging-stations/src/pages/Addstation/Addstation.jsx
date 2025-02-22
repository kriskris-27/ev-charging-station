import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Addstation = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [markerName, setMarkerName] = useState('');

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition({ lat, lng });
        console.log('Marker position set:', { lat, lng });
      },
    });
    return null;
  }

  const handleSubmit = async () => {
    console.log("handle click enabled");

    if (!markerPosition || !markerName) {
      alert('Please select a location on the map and enter a name.');
      return;
    }
    try {
      console.log('Sending request to add marker:', {
        name: markerName,
        lat: markerPosition.lat,
        lon: markerPosition.lng,
      });

      const response = await axios.post('http://localhost:3005/api/auth/addstation', {
        name: markerName,
        lat: markerPosition.lat,
        lon: markerPosition.lng,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Ensure the token is sent if required
        }
      });

      console.log("Marker added successfully:", response.data);
      alert('Marker added successfully');
      setMarkerName('');
      setMarkerPosition(null);

      alert(`Marker saved: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error('Error saving marker:', error);
      alert('Error saving marker.');
    }
  };

  console.log('Addstation component rendered');

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h2>Select a Location on the Map and Submit</h2>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Marker Name:</label>
        <input
          type="text"
          value={markerName}
          onChange={(e) => setMarkerName(e.target.value)}
          placeholder="Enter marker name"
        />
        <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>
      </div>

      <MapContainer
        center={[11.0168445, 76.9558321]} // Example center (Coimbatore area)
        zoom={13}
        style={{ width: '100%', height: '90%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />

        {markerPosition && (
          <Marker position={[markerPosition.lat, markerPosition.lng]}>
            <Popup>
              <div>
                <strong>{markerName || 'Unnamed Marker'}</strong>
                <br />
                Lat: {markerPosition.lat.toFixed(4)}, Lon: {markerPosition.lng.toFixed(4)}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Addstation;