import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl, GeolocateControl } from "react-map-gl";

import * as Camp from "../../assets/camp.json";
import Syringe from '../../assets/syringe.png';
import './Map.css'

export default function Map() {
   const [viewport, setViewport] = useState({
      latitude: 20.716943,
      longitude: 77.582902,
      width: "100%",
      height: "50em",
      zoom: 5,
   });

   const [selectedCamp, setSelectedCamp] = useState(null);

   useEffect(() => {
      const listener = e => {
         if (e.key === "Escape") {
            setSelectedCamp(null);
         }
      };
      window.addEventListener("keydown", listener);

      return () => {
         window.removeEventListener("keydown", listener);
      };
   }, []);

   return (
      <div>
         <header>
            <div className="container-header">
               <div className="logo">
                  <h1> <span className="bold">Find Vaccination Camp</span>Near You</h1>
               </div>
               <p style={{ color: "#D3D3D3", fontSize: " 0.7em", marginTop: "5rem" }}>Unfortunately only few cities has made their vaccination camp location public, we will be adding more camps as soon as we get verfied and relevant data</p>
            </div>
         </header>
         <ReactMapGL
            {...viewport}
            mapboxApiAccessToken='pk.eyJ1Ijoic2xhc2hyb290IiwiYSI6ImNraW40NWN2cTB6NDUydG13djV4ajZodW0ifQ.ZjSmlwoUjy8HTp3DLsqAFw'
            mapStyle="mapbox://styles/slashroot/ckivj2b2m3w3o19rptbirwo8q"
            onViewportChange={viewport => {
               setViewport(viewport);
            }}
            scrollZoom={false}
         >
            <GeolocateControl
               positionOptions={{ enableHighAccuracy: true }}
               trackUserLocation={true}
               style={{ position: 'absolute', right: 30, bottom: 150 }}
            />
            <div style={{ position: 'absolute', right: 30, bottom: 50 }}>
               <NavigationControl />
            </div>

            {Camp.data.map(camp => (
               <Marker
                  key={camp.name}
                  latitude={camp.location.coordinates[1]}
                  longitude={camp.location.coordinates[0]}
               >
                  <button
                     className="marker-btn"
                     onClick={e => {
                        e.preventDefault();
                        setSelectedCamp(camp);
                     }}
                  >
                     <img src={Syringe} alt="Syringe Icon" />
                  </button>
               </Marker>
            ))}

            {selectedCamp ? (
               <Popup
                  latitude={selectedCamp.location.coordinates[1]}
                  longitude={selectedCamp.location.coordinates[0]}
                  onClose={() => {
                     setSelectedCamp(null);
                  }}
               >
                  <div style={{ width: "300px" }}>
                     <h2>{selectedCamp.name}</h2>
                     <p style={{ marginTop: "0px" }}>{selectedCamp.location.address}</p>
                  </div>
               </Popup>
            ) : null}
         </ReactMapGL>

      </div>
   )
}
