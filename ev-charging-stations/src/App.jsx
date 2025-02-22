import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import StationPage from './pages/StationPage'
import AdminLogin from './pages/AdminLogin'
import ProRoute from './proRout/Proroute'
import UnderConstruction from './pages/UnderConstr'



const App = () => {
    const [data,setData] = useState([])
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()
    const [isauth,setAuth]=useState(false)
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
        <Route path="/admin" element={<AdminLogin setAuth={setAuth}/>}/>



        {/*Fallback*/}
        <Route path="*" element={<UnderConstruction/>} />
        <Route path="/add" element={<ProRoute  isauth={isauth}/>} />
    </Routes>
    </>
  )
}

export default App