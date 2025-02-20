import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import StationPage from './pages/StationPage'


const App = () => {
    const [data,setData] = useState([

        // { "shopName": "Shop A - 200km", "lat": 41.7128, "lon": -73.006 },
        //     { "shopName": "Shop B - 400km", "lat": 42.7128, "lon": -72.006 },
        //     { "shopName": "Shop C - 600km", "lat": 43.7128, "lon": -71.006 },
        //     { "shopName": "Shop D - 800km", "lat": 44.7128, "lon": -70.006 },
        //     { "shopName": "Shop E - 1000km", "lat": 45.7128, "lon": -69.006 },
        //     { "shopName": "Shop F - 200km", "lat": 41, "lon": -75.5 },
        //     { "shopName": "Shop G - 400km", "lat": 42.5, "lon": -76 },
        //     { "shopName": "Shop H - 600km", "lat": 44, "lon": -77.5 },
        //     { "shopName": "Shop I - 800km", "lat": 45.5, "lon": -78 },
        //     { "shopName": "Shop J - 1000km", "lat": 47, "lon": -79.5 }
    ])
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()
  return (
    <>
    <Routes>
        <Route path="/" element={<Home  
        data={data}
        setData={setData} 
        setLon={setLon}
        setLat={setLat}
        />}/>
        <Route path="about" element={<Aboutus/>}/>
        <Route path="location" element={<StationPage  data={data} lat={lat} lon={lon}/>}/>
        
    </Routes>
    </>
  )
}

export default App