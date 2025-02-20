import React from 'react'
import StationL from '../components/Stations/StationL'
import Navbar from '../components/Navbar/Navbar'

const StationPage = ({data , lat,lon}) => {
  return (
    <>
    <Navbar/>
    <StationL  data={data} lat={lat} lon={lon}/>
    </>
  )
}

export default StationPage