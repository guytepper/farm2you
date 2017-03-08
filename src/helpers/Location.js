import GeoFire from 'geofire';
import axios from 'axios';
import firebase from '../config/firebase'

// Geofire instance to manage the location data from the database
const geoFire = new GeoFire(firebase.database().ref('locations'));

// Prompts the user to give it's current location & commits the value
export const getPosition = function getPosition() {
  return new Promise((resolve, reject) => {
  // Geolocation API options
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  /* Geolocation success callback function
   * Receives a Geoposition object and resolves the promise
   * with an [latitude, longitude] array.
   */
  function success(pos) {
    const latlng = geoToLatLng(pos);
    resolve(latlng);
  }

  /* Geolocation error callback function
   * Being used when the user denies the Geolocation API prompt or
   * there's some error with it.
   * The user's location will be detected using his IP instead.
   */
  function error(err) {
    getPositionByIP.then(latlng => resolve(latlng));
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
})};

export const getPositionByIP = new Promise((resolve, reject) => {
  // Call freegeoip API endpoint to get the user's location
  axios.get('http://freegeoip.net/json/')
    .then(response => {
      const data = response.data;
      const latlng = [data.latitude, data.longitude];
      resolve(latlng);
    })
    .catch(error => {
      console.log(error);
      reject(error);
    });
})

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

/* Returns a promise with the farm location from the database.
   Returnd location format: [latitude, longtitude]
 */
export const getFarmLocation = function getFarmLocation(farmId) {
  return new Promise((resolve, reject) => {
    geoFire.get(farmId)
      .then(location => resolve(location))
      .catch(err => reject(err))
    });
}
