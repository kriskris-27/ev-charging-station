const express = require('express');
const router = express.Router();
const Station = require('../models/stationModel');

// Get all stations
router.get('/', async (req, res) => {
    try {
        const stations = await Station.find();
        res.json(stations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new station
router.post('/', async (req, res) => {
    const station = new Station({
        name: req.body.name,
        location: req.body.location,
        connectorType: req.body.connectorType,
        powerRating: req.body.powerRating,
        availability: req.body.availability,
        price: req.body.price
    });

    try {
        const newStation = await station.save();
        res.status(201).json(newStation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a station
router.delete('/:id', async (req, res) => {
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