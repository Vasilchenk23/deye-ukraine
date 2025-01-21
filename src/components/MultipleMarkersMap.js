'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loader from './Loader';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginTop: '100px'
};

const center = {
  lat: 50.4501,
  lng: 30.5234,
};

const locations = [
  { lat: 50.464512, lng: 30.600325 }, 
  { lat: 49.232726, lng: 28.464081 }, 
  { lat: 48.454870, lng: 35.036625 },  
  { lat: 47.849602, lng: 35.137413 },  
  { lat: 49.844236, lng: 24.027965 },  
  { lat: 48.921423, lng: 24.711035 },  
  { lat: 47.907920, lng: 33.390477 },  
  { lat: 46.489157, lng: 30.743331 },  
  { lat: 50.617673, lng: 26.264871 }, 
  { lat: 50.907978, lng: 34.798866 },  
  { lat: 50.036631, lng: 36.281890 }, 
  { lat: 49.987063, lng: 36.236183 }
];


const MultipleMarkersMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY} loadingElement={<Loader />}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MultipleMarkersMap;
