const express = require('express');
const router = express.Router();
const Station = require('../models/stationModel');

// Get recent station updates
router.get('/stations', async (req, res) => {
    try {
        // Get stations added in the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentStations = await Station.find({
            createdAt: { $gte: thirtyDaysAgo }
        }).sort({ createdAt: -1 });

        res.json(recentStations);
    } catch (error) {
        console.error('Error fetching station updates:', error);
        res.status(500).json({ message: 'Error fetching station updates' });
    }
});

module.exports = router; 