import GeoFire from 'geofire';

// Prompts the user to give it's current location & commits the value
export const getPosition = new Promise((resolve, reject) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    const latlng = geoToLatLng(pos);
    resolve(latlng);
  }
  navigator.geolocation.getCurrentPosition(success, null, options);
});

// Converts a geoposition object to [latitude, longitude]
export const geoToLatLng = function geoToLatLng(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  return [lat, lng];
}

// Returns the distance in km between two [latitude, longitude] locations
export const distance = function distance(location1, location2) {
  return GeoFire.distance(location1, location2);
}
