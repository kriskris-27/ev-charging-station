import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import StationPage from './pages/StationPage'
import AdminLogin from './pages/AdminLogin'
import Addstation from './pages/Addstation/Addstation'
import ProRoute from './proRout/Proroute'



const App = () => {
    const [data,setData] = useState([])
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()
    const [isauth,setAuth]=useState()
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
        <Route path="/admin" element={<AdminLogin/>}/>



        {/*Fallback*/}
        <Route path="*" element={<AdminLogin />} />
        <Route path="/add" element={<ProRoute  data={isauth}/>} />
    </Routes>
    </>
  )
}

export default App