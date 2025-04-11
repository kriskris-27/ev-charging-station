const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    connectorType: {
        type: String,
        required: true,
        enum: ['Type 1', 'Type 2', 'CCS', 'CHAdeMO', 'Tesla']
    },
    powerRating: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Station', stationSchema);