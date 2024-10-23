import L from 'leaflet';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const SimpleMap = ({features}) => {
  const mapRef = useRef(null);
  const latitude = 47.6061;
  const longitude = -122.3328;
  console.log('simpleMap features', features)
  return ( 
  	<div>
	  <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "80vh", width: "80vw"}}>
		<TileLayer
		  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	  {features.map((x, i) => {
	  		
	  			console.log(x)
	  		
		  	const point =[parseFloat(x.ypos), parseFloat(x.xpos)]
		  	return (
		  		<Marker key={x.i} position={point}  icon={DefaultIcon} >
		  			<Popup>
				        {x.name}
				        <br/>
				        {x.feature_desc}
				      </Popup>
	            </Marker>
		  	);
		  }) 
		}
	  </MapContainer>
	  </div>
  );
};

export default SimpleMap;