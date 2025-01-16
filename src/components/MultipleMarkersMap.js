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
  { lat: 50.4837162, lng: 30.423924 },
  { lat: 49.96036277783077, lng: 36.26653402050905 },
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
