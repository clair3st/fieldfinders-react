import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const SEATTLE_CENTER = [47.6061, -122.3328];
const MAP_ZOOM = 13;
const MAP_STYLE = { height: "80vh", width: "80vw" };

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

const SimpleMap = ({ features }) => {
  return (
    <div>
      <MapContainer
        center={SEATTLE_CENTER}
        zoom={MAP_ZOOM}
        style={MAP_STYLE}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {features.map((feature) => {
          const point = [parseFloat(feature.ypos), parseFloat(feature.xpos)];
          return (
            <Marker key={feature.id} position={point} icon={DefaultIcon}>
              <Popup>
                {feature.name}
                <br />
                {feature.feature_desc}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default SimpleMap;