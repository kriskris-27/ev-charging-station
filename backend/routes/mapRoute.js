const express = require('express');
const router = express.Router();
const Station = require('../models/stationModel');
const haversine = require('haversine-distance');

router.get('/test', (req, res) => {
    res.status(200).json({ text: 'hello world' });
});

router.post('/locations', async (req, res) => {
    const { range, lat, lon } = req.body;
    try {
        const stations = await Station.find();
        console.log("All stations from DB:", stations);
        
        // Filter stations based on the provided range, latitude, and longitude
        const filteredStations = stations.filter(station => {
            // Ensure station.location exists and is valid
            if (!station.location) {
                console.warn(`Station ${station._id} is missing location.`);
                return false;
            }
            const locationParts = station.location.split(',');
            if (locationParts.length !== 2) {
                console.warn(`Station ${station._id} location format is invalid: ${station.location}`);
                return false;
            }
            
            const [stationLat, stationLon] = locationParts.map(coord => parseFloat(coord.trim()));
            const point1 = { latitude: stationLat, longitude: stationLon };
            const point2 = { latitude: lat, longitude: lon };
            const distance_km = (haversine(point1, point2) / 1000);
            
            return distance_km <= range;
        });
        console.log("Filtered stations:", filteredStations);

        // Add distance to each station
        const stationsWithDistance = filteredStations.map(station => {
            const [stationLat, stationLon] = station.location.split(',').map(coord => parseFloat(coord.trim()));
            const distance = haversine(
                { latitude: stationLat, longitude: stationLon },
                { latitude: lat, longitude: lon }
            ) / 1000; // Convert to kilometers

            return {
                ...station._doc,
                distance: distance.toFixed(2)
            };
        });

        // Sort by distance
        stationsWithDistance.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

        console.log('Filtered stations:', stationsWithDistance);
        res.json(stationsWithDistance);
    } catch (error) {
        console.error('Error in /locations:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
