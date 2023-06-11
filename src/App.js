import React from "react";
import MapJSON from "./components/MapJSON.jsx";

import { MapContainer, TileLayer, GeoJSON , Marker , Popup } from 'react-leaflet';
import "./components/styles.css";
import "leaflet/dist/leaflet.css";
import Home from "./components/Home.jsx";

const geojsonData = {"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[78.80071268, 10.76741162], [78.8041209, 10.76442448], [78.80596488, 10.76244508], [78.80877755, 10.75989966], [78.81217214, 10.75736784], [78.81609325, 10.75529881], [78.82120593, 10.75298474], [78.82599993, 10.75173242], [78.82660957, 10.75593858], [78.82514089, 10.76161476], [78.82436498, 10.76353402], [78.82256377, 10.7667872], [78.82047158, 10.77295319], [78.81789446, 10.77322541], [78.81684144, 10.77496765], [78.81380709, 10.77518543], [78.81225528, 10.77002674], [78.81196431, 10.77002674], [78.81214443, 10.77070731], [78.81177033, 10.77077537], [78.81156078, 10.77006203], [78.81064804, 10.77010841], [78.81067575, 10.77062564], [78.80970586, 10.7708162], [78.80902723, 10.77062244], [78.80874983, 10.77008119], [78.80945646, 10.76994507], [78.80902694, 10.76901949], [78.80796394, 10.76951945], [78.80807092, 10.77046231], [78.80721519, 10.77087689], [78.80581247, 10.77108843], [78.80505663, 10.77192266], [78.80414981, 10.77166011], [78.80317992, 10.77185067], [78.80258414, 10.7709251], [78.80248715, 10.77012202], [78.80295824, 10.76921005], [78.80071268, 10.76741162]]]}, "id": "40cd0324-75e1-41ee-a4f6-57c1ab9cd33f", "properties": {"name": "Nit Outline"}}]};

const MarkIcon = new L.Icon( {
  iconUrl: require("./assets/Mark.png"),
  iconSize: [45,45]
});

function App() {
  return (
    <div id="map">
      <Home />
      <MapContainer className=" flex items-center" center={[10.7636 , 78.8150]}  zoom={14.58}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <GeoJSON data={geojsonData} />
            <Marker position={[10.7636 , 78.8180]} icon={MarkIcon} zoom={15} >
              <Popup><p className="text-xl ">National Institue of Technology, Trichy.</p></Popup>
            </Marker>
        </MapContainer>
    </div>
  );
}



export default App;
