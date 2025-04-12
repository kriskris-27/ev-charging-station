import Footer from "../components/Footer/Footer"
import HeroHeader from "../components/HeroHeader/HeroHeader"
import Navbar from "../components/Navbar/Navbar"
import Updates from "../components/Updates/Updates"

const Home = ({data,setData,setLat,setLon}) => {
  return (
    <>
    <Navbar />
    <HeroHeader data={data}
    setData={setData}
    setLon={setLon}
    setLat={setLat}
    />
    <Updates/>
    <Footer/>
    </>
  )
}

export default Home