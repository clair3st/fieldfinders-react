import { useState, useEffect, useRef } from 'react';
import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

class Apps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			features:[]
		}
	}

	componentDidMount =() => {
		this.getFacilities();
	}

	getFacilities = ()=> {
		fetch('http://127.0.0.1:5000/api/v1/resources/features/skate')
			.then((response) => response.json())
	  		.then((data) => {
	    	this.setState({ features: data });
	  })
	  .catch((error) => {
			console.error('Error fetching data:', error);
	  });
	}

	render() {
	    let { features} = this.state;
	    return (
	    <div>
	        <SimpleMap features={features}/>
	    </div>
	    );
	  }
}

// function Fetch(){
//   console.log('fetch!')
//   const [fields, setFields] = useState([]);
//   useEffect(() => {
//     let url = "http://127.0.0.1:5000/api/v1/resources/features/all"
//     fetch(url)
//       .then(response => response.json())
//       .then(data =>{
//         console.log(data)
//       })
//       .catch(error => console.log(error))
//   })
// }

// function LocationMarker() {
// 	console.log('fetch!')

// 	useEffect(() => {
// 		let url = "http://127.0.0.1:5000/api/v1/resources/features/all"
// 		fetch(url)
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log(data)

// 				return data.map((x) => {
// 					let position = [parseFloat(x.ypos), parseFloat(x.xpos)]
// 					return <Marker position={position}></Marker>;
// 				});
// 				// const [position, setPosition] = useState(null)
// 					// const map = useMapEvents({
// 					// 	click() {
// 					// 		map.locate()
// 					// 	},
// 					// 	locationfound(e) {
// 					// 		setPosition(e.latlng)
// 					// 		map.flyTo(e.latlng, map.getZoom())
// 					// 	},
// 					// })

// 			  	// return position === null ? null : (
// 				// 	<Marker position={position}>
// 				// 		<Popup>You are here</Popup>
// 				// 	</Marker>
// 				// )
// 			})
// 		  .catch(error => console.log(error))
// 	  })

  
// }

const SimpleMap = ({features}) => {
  const mapRef = useRef(null);
  const latitude = 47.6061;
  const longitude = -122.3328;
  console.log('simpleMap features', features)
  return ( 
  	<div>
	  <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
		<TileLayer
		  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	  {features.map((x, i) => {
	  		
	  			console.log(x)
	  		
		  	const point =[parseFloat(x.ypos), parseFloat(x.xpos)]
		  	return (
		  		<Marker position={point}  icon={DefaultIcon} >
		  			<Popup>
				        {x.name}
				      </Popup>
	            </Marker>
		  	);
		  }) 
	}
	  </MapContainer>
	  </div>
  );
};

export default Apps;