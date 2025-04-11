import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import StationPage from './pages/StationPage'
import AdminLogin from './pages/AdminLogin'
import ProRoute from './proRout/Proroute'
import UnderConstruction from './pages/UnderConstr'
import LearnMore from './components/LearnMore/LearnMore'
import FAQ from './components/FAQ/FAQ'
import Blog from './components/Blog/Blog'
import Updates from './components/Updates/Updates'
import Events from './components/Events/Events'
import Support from './components/Support/Support'
import ContactUs from './components/ContactUs/ContactUs'

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
        <Route path="/learn-more" element={<LearnMore/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/updates" element={<Updates/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>

        {/*Fallback*/}
        <Route path="*" element={<UnderConstruction/>} />
        <Route path="/add" element={<ProRoute  isauth={isauth}/>} />
    </Routes>
    </>
  )
}

export default App