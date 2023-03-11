import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useMemo} from "react"


export default function Home() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey:"AIzaSyCg45Q9Hhq1guyL3jMPFwKOigSEQuk54-4"
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  function Map() {
    const center = useMemo(() => ({ lat: 40.691693, lng: 23.004647}), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }