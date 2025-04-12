import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Uncomment if using react-icons

// Fix default icons for Leaflet
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
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState(null);
  const [markerName, setMarkerName] = useState('');
  const [stations, setStations] = useState([]);
  const [error, setError] = useState(null);

  // Component to handle map clicks (for setting new marker position)
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

  // Add station on submit
  const handleSubmit = async () => {
    if (!markerPosition || !markerName) {
      alert('Please select a location on the map and enter a marker name.');
      return;
    }
    try {
      console.log('Sending marker:', {
        name: markerName,
        lat: markerPosition.lat,
        lon: markerPosition.lng,
      });
      // Update the URL based on your environment
      const response = await axios.post(
        'http://localhost:3005/api/stations/addstation',
        {
          name: markerName,
          lat: markerPosition.lat,
          lon: markerPosition.lng,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      );
      console.log("Marker added successfully:", response.data);
      alert('Marker added successfully');
      setMarkerName('');
      setMarkerPosition(null);
      // Refresh the stations list
      fetchStations();
    } catch (error) {
      console.error('Error saving marker:', error);
      alert('Error saving marker.');
    }
  };

  // Fetch all stations from backend
  const fetchStations = async () => {
    try {
      // Update the URL based on your environment
      const response = await axios.get('http://localhost:3005/api/stations');
      setStations(response.data);
    } catch (err) {
      console.error('Error fetching stations:', err);
      setError('Failed to load stations. Please try again.');
    }
  };

  // Fetch stations on component mount
  useEffect(() => {
    fetchStations();
  }, []);

  // Delete station by id
  const handleDelete = async (stationId) => {
    try {
      // Update the URL based on your environment
      const response = await axios.delete(`http://localhost:3005/api/stations/${stationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      console.log('Station deleted:', response.data);
      // Update local state to remove deleted station
      setStations(stations.filter(station => station._id !== stationId));
    } catch (err) {
      console.error('Error deleting station:', err);
      alert('Failed to delete station.');
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div className="back-button" onClick={() => navigate('/admin')}>
        {/* Uncomment the next line if you want to display an icon */}
        <FaArrowLeft />
        
      </div>
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
        center={[11.0168445, 76.9558321]}
        zoom={13}
        style={{ width: '100%', height: '50vh' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
        {/* Render new station marker if set */}
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
        {/* Render markers for all existing stations */}
        {stations.length > 0 &&
          stations.map(station => (
            <Marker 
              key={station._id} 
              position={[station.lat, station.lon]}
            >
              <Popup>
                <div>
                  <strong>{station.name}</strong>
                  <br />
                  Lat: {station.lat.toFixed(4)}, Lon: {station.lon.toFixed(4)}
                  <br />
                  <button 
                    onClick={() => handleDelete(station._id)}
                    style={{ marginTop: '5px' }}
                  >
                    Delete
                  </button>
                </div>
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>

      <div>
        <h2>All Stations</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {stations.length === 0 ? (
          <p>No stations found.</p>
        ) : (
          <ul>
            {stations.map(station => (
              <li key={station._id}>
                {station.name} (Lat: {station.lat}, Lon: {station.lon})
                <button 
                  onClick={() => handleDelete(station._id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Addstation;