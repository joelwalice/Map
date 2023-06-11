import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "./styles.css";
import "leaflet/dist/leaflet.css";
import geojsonData from "./geojsonData";

const MapJSON = () => {
    return(
        <MapContainer center={[10.7630 , 78.8180]} zoom={15}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <GeoJSON data={geojsonData} />
        </MapContainer>
    );
};


export default MapJSON;