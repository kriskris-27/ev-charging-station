const express = require('express');
const router = express.Router();
const Station = require('../models/stationModel');
const verifyToken = require("../middlewares/authMiddleware");
// Get all stations
router.get('/', async (req, res) => {
    try {
        const stations = await Station.find();
        res.json(stations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/addstation', verifyToken, async (req, res) => {
    try {
        const { name, lat, lon } = req.body;
        console.log('Received request to add station:', { name, lat, lon });

        if (!name || !lat || !lon) {
            console.log('Missing required fields');
            return res.status(400).json({ message: 'Name, latitude, longitude are required.' });
        }

        const newStation = new Station({
            name, lat, lon
        });
        await newStation.save();
        console.log('Station added successfully:', newStation);
        res.status(201).json({ message: 'Station added successfully', station: newStation });
    } catch (error) {
        console.log('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a station
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const deletedStation = await Station.findByIdAndDelete(req.params.id);
        if (!deletedStation) {
            return res.status(404).json({ message: 'Station not found' });
        }
        res.json({ message: 'Station deleted successfully', station: deletedStation });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 