import GeoFire from 'geofire';

// Prompts the user to give it's current location & commits the value
export const getPosition = new Promise((resolve, reject) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(pos => {
    resolve(pos);
  }, null, options);
});

// Converts a geoposition object to [latitude, longitude]
export const geoToLatLng = function geoToLatLng(pos) {
  const lat = pos.latitude;
  const lng = pos.longitude;

  return [lat, lng];
}

export const distance = function distance(location1, location2) {
  return GeoFire.distance(location1, location2);
}
