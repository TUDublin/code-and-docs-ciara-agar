// Create a Google Maps client
const googleMapsClient = googleMaps.createClient({
  key: 'AIzaSyDfdrKWx48EQVjU5AsBF1tAESgc_8VfBVk',
  Promise: Promise
});

// Function to fetch nearby vets
function fetchNearbyVets(location) {
  return googleMapsClient.placesNearby({
    location: [location.lat, location.lng],
    radius: 5000, // Search within a 5km radius
    type: 'veterinary_care' // Specify the type of place
  }).asPromise()
  .then((response) => {
    return response.json.results;
  })
  .catch((error) => {
    console.log("Error fetching nearby vets:", error);
  });
}
