// src/components/MapComponent.js
import React, { useEffect, useRef } from 'react';

function MapComponent({ center, zoom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    // You can add more Google Maps features here
  }, [center, zoom]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
}

export default MapComponent;
