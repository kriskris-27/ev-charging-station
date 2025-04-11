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
        // console.log('All stations:', stations);
        // res.json(stations);
        // console.log(lat);
        // console.log(lon);

        // Filter stations based on the provided range, latitude, and longitude
        const filteredStations = stations.filter(entry => {



            const point1 = { latitude: entry.lat, longitude: entry.lon };
            const point2 = { latitude: lat, longitude: lon };
            const distance_km = (haversine(point1, point2)/1000); 
            // console.log(distance_km)
            return distance_km <= range;
        });


















        // const result = filteredStations.map(entry => ({
        //     ...entry._doc, // Include all fields from the entry
        //     distance_km: (haversine({ latitude: entry.lat, longitude: entry.lon }, { latitude: lat, longitude: lon }) / 1000).toFixed(2) 
        // }));

        console.log('Filtered stations:', filteredStations);
        res.json(filteredStations);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;