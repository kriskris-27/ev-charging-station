import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaEdit } from "react-icons/fa";
import './Addstation.css';

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
  const [stations, setStations] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    connectorType: '',
    powerRating: '',
    price: '',
    availability: true
  });

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/stations");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Fetched stations:", data);
      setStations(data);
    } catch (error) {
      console.error("Error fetching stations:", error);
      alert("Error fetching stations. Please make sure the backend server is running on port 3005.");
    }
  };

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition({ lat, lng });
        setFormData(prev => ({
          ...prev,
          location: `${lat}, ${lng}`
        }));
        console.log('Marker position set:', { lat, lng });
      },
    });
    return null;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    if (!markerPosition) {
      alert('Please select a location on the map.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/api/stations', formData);
      console.log("Station added successfully:", response.data);
      alert('Station added successfully');
      
      // Reset form
      setFormData({
        name: '',
        location: '',
        connectorType: '',
        powerRating: '',
        price: '',
        availability: true
      });
      setMarkerPosition(null);

      // Refresh stations list
      await fetchStations();
    } catch (error) {
      console.error('Error saving station:', error);
      alert('Error saving station. Please try again.');
    }
  };

  const handleDelete = async (stationId) => {
    if (window.confirm("Are you sure you want to delete this station?")) {
      try {
        const response = await fetch(`http://localhost:3005/api/stations/${stationId}`, {
          method: "DELETE"
        });

        if (response.ok) {
          alert("Station deleted successfully!");
          fetchStations();
        } else {
          alert("Failed to delete station");
        }
      } catch (error) {
        console.error("Error deleting station:", error);
        alert("An error occurred while deleting the station");
      }
    }
  };

  console.log('Addstation component rendered');

  return (
    <div className="add-station-container">
      <div className="back-button" onClick={() => navigate('/admin')}>
        <FaArrowLeft />
      </div>
      <h2>Select a Location on the Map and Submit</h2>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '5px' }}>Marker Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter marker name"
        />
        <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>
      </div>

      <div className="map-container">
        <h2>Select a Location on the Map</h2>
        <MapContainer
          center={[11.0168445, 76.9558321]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
          {markerPosition && (
            <Marker position={[markerPosition.lat, markerPosition.lng]}>
              <Popup>
                <div>
                  <strong>{formData.name || 'New Station'}</strong>
                  <br />
                  Lat: {markerPosition.lat.toFixed(4)}, Lon: {markerPosition.lng.toFixed(4)}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="station-form-container">
        <h2>Add New Charging Station</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Station Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter station name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              readOnly
              placeholder="Click on map to set location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="connectorType">Connector Type</label>
            <select
              id="connectorType"
              name="connectorType"
              value={formData.connectorType}
              onChange={handleChange}
              required
            >
              <option value="">Select Connector Type</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="CCS">CCS</option>
              <option value="CHAdeMO">CHAdeMO</option>
              <option value="Tesla">Tesla</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="powerRating">Power Rating (kW)</label>
            <input
              type="number"
              id="powerRating"
              name="powerRating"
              value={formData.powerRating}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="Enter power rating"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($/kWh)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="Enter price per kWh"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleChange}
              />
              Available
            </label>
          </div>

          <button type="submit" className="submit-button">
            Add Station
          </button>
        </form>
      </div>

      <div className="stations-list">
        <h3>Existing Stations</h3>
        <div className="stations-grid">
          {stations.map((station) => (
            <div key={station._id} className="station-card">
              <h4>{station.name}</h4>
              <p>Location: {station.location}</p>
              <p>Connector: {station.connectorType}</p>
              <p>Power: {station.powerRating} kW</p>
              <p>Price: ${station.price}/kWh</p>
              <p>Status: {station.availability ? "Available" : "Unavailable"}</p>
              <div className="station-actions">
                <button
                  className="delete-button"
                  onClick={() => handleDelete(station._id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addstation;
