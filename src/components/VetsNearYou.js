// src/components/VetsNearYou.js
import React, { useState, useEffect } from 'react';
import MapComponent from './MapsComponent';

function VetsNearYou() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [nearbyVets, setNearbyVets] = useState([]); // State to store nearby vets
  const zoom = 8;

  // Function to fetch nearby vets
  const fetchNearbyVets = async (location) => {
    const url = `/api/nearbyvets?lat=${location.lat}&lng=${location.lng}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results.map(place => ({
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        name: place.name
      }));
    } catch (error) {
      console.error("Error fetching nearby vets:", error);
      return [];
    }
  };


  useEffect(() => {
    const fetchAndSetVets = async (location) => {
      const vets = await fetchNearbyVets(location);
      setNearbyVets(vets);
    };

    const handleGeoLocationSuccess = (position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setCurrentLocation(userLocation);
      fetchAndSetVets(userLocation);
    };

    const handleGeoLocationError = () => {
      console.error("Error getting the location");
      const defaultLocation = { lat: -34.397, lng: 150.644 };
      setCurrentLocation(defaultLocation);
      fetchAndSetVets(defaultLocation);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeoLocationSuccess, handleGeoLocationError);
    } else {
      console.error("Your browser does not support Geolocation");
      handleGeoLocationError(); // Call with default location
    }
  }, []);



  return (
    <div>
      <h1>Vets Near You</h1>
      <MapComponent center={currentLocation} zoom={zoom} vets={nearbyVets} />
      {/* Other components */}
    </div>
  );
}

export default VetsNearYou;
