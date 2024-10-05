import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Fetch(){
  console.log('fetch!')
  const [fields, setFields] = useState([]);
  useEffect(() => {
    let url = "http://127.0.0.1:5000/api/v1/resources/features/all"
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
      })
      .catch(error => console.log(error))
  })
}

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = 47.6061;
  const longitude = -122.3328;

  return ( 
      <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
      </MapContainer>
  );
};

export default SimpleMap;