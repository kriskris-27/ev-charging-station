const express = require('express');
const router = express.Router();
const haversine = require('haversine-distance'); 
router.get('/test', (req, res) => {
    res.status(200).json({ text: 'hello world' });
});


const sampleData = [
  
    // { shopName: "Shop A - 200km", lat: 41.7128, lon: -73.0060 },  // ~200km
    // { shopName: "Shop B - 400km", lat: 42.7128, lon: -72.0060 },  // ~400km
    // { shopName: "Shop C - 600km", lat: 43.7128, lon: -71.0060 },  // ~600km
    // { shopName: "Shop D - 800km", lat: 44.7128, lon: -70.0060 },  // ~800km
    // { shopName: "Shop E - 1000km", lat: 45.7128, lon: -69.0060 }, // ~1000km
    // { shopName: "Shop F - 200km", lat: 41.0000, lon: -75.5000 },  // ~200km
    // { shopName: "Shop G - 400km", lat: 42.5000, lon: -76.0000 },  // ~400km
    // { shopName: "Shop H - 600km", lat: 44.0000, lon: -77.5000 },  // ~600km
    // { shopName: "Shop I - 800km", lat: 45.5000, lon: -78.0000 },  // ~800km
    // { shopName: "Shop J - 1000km", lat: 47.0000, lon: -79.5000 }  



    [
        // {
        //   "name": "Electric Vehicle Charging Station",
        //   "address": "128, 2247, Trichy Rd, Krishnapuram Medu, Singanallur, Coimbatore",
        //   "latitude": 11.004556,
        //   "longitude": 77.028274
        // },
        // {
        //   "name": "Kazam - Junior Kuppana Charging Station",
        //   "address": "1/69, Junior Kuppana, Madukkari, Coimbatore",
        //   "latitude": 10.9053,
        //   "longitude": 76.9647
        // },
        // {
        //   "name": "Zeon - Brookfields Charging Station",
        //   "address": "Store 67, Parking B1, Dr. Krishnasamy Mudaliyar Rd, Ram Nagar, Coimbatore",
        //   "latitude": 11.0023,
        //   "longitude": 76.9662
        // },
        // {
        //   "name": "Zone Hotel - Tata Power Charging Station",
        //   "address": "33/3, Avinashi Rd, Puliakulam, Coimbatore",
        //   "latitude": 11.0183,
        //   "longitude": 76.9947
        // },
        // {
        //   "name": "ibis Coimbatore City Centre Charging Station",
        //   "address": "Lakshmi Mills Junction, Coimbatore",
        //   "latitude": 11.0185,
        //   "longitude": 76.9820
        // }
      ]
      
   
    
];


router.post('/locations', (req, res) => {
    const {range,lat,lon} = req.body;
        const result = sampleData.filter(entry => {
            const point1 = { latitude: entry.lat, longitude: entry.lon };
            const point2 = { latitude: lat, longitude: lon };
            const distance_km = (haversine(point1, point2) / 1000).toFixed(2); // Convert meters to km, round to 2 decimal places
            
            if(distance_km <= range)
                return { ...entry, distance_km };
        });

    res.json(result);
});


module.exports = router; // ✅ Fix: Use `module.exports`
