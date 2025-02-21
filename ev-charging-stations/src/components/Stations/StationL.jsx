import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const StationL = ({data,lat,lon}) => {
    // console.log(data);
    
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     const fetchShops = async () => {
      // Static data for this example
    //   const data = [
    //     { "shopName": "Shop A - 200km", "lat": 41.7128, "lon": -73.006 },
    //     { "shopName": "Shop B - 400km", "lat": 42.7128, "lon": -72.006 },
    //     { "shopName": "Shop C - 600km", "lat": 43.7128, "lon": -71.006 },
    //     { "shopName": "Shop D - 800km", "lat": 44.7128, "lon": -70.006 },
    //     { "shopName": "Shop E - 1000km", "lat": 45.7128, "lon": -69.006 },
    //     { "shopName": "Shop F - 200km", "lat": 41, "lon": -75.5 },
    //     { "shopName": "Shop G - 400km", "lat": 42.5, "lon": -76 },
    //     { "shopName": "Shop H - 600km", "lat": 44, "lon": -77.5 },
    //     { "shopName": "Shop I - 800km", "lat": 45.5, "lon": -78 },
    //     { "shopName": "Shop J - 1000km", "lat": 47, "lon": -79.5 }
    //   ];
    //   try{
    //     const response = await fetch('http://localhost:3005/api/testapi/locations' , {method: 'POST'

    //     });
    //     const data = await response.json();
    //     console.log('data fetched  from database' , data)
    //     setShops(data)

    //   }catch(error){
    //     console.error('Error fetching locations ',error)
    //   }
      
    // };

//     fetchShops();
//   }, []);

  return (

   <>

 
    <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <MapContainer
        center={[lat ,lon]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[ lat ,lon]} icon={redIcon}>
          <Popup>You are here</Popup>
        </Marker> 
{
    data.map((val)=>(
        <Marker position={[ val.lat, val.lon]}>
          <Popup><a href="#" target='_blank'>{val.name}</a></Popup>
        </Marker> 
     ) )
}

      </MapContainer>
    </div>
  

    <div>
      <h1>Stations List</h1>
        {data.map((shop, index) => (
          <li key={index}>
            <strong>{shop.name}</strong><br />
            {/* Lat: {shop.lat}, Lon: {shop.lon} */}
          </li>
        ))}
    </div>
    </>
  );
};

export default StationL;