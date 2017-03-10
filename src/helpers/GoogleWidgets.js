import mapsapi from 'google-maps-api';

export const googleMaps = mapsapi(GOOGLE_API_KEY, ['places']);

// Inits the Google Maps Autocomplete plugin.
// Takes an element and a callback to execture when a place has changed.
export function initGMAutoComplete(element, callback) {
  console.log(element);
  googleMaps().then(maps => {
    const autocomplete = new google.maps.places.Autocomplete(element);
    autocomplete.addListener('place_changed', function() {
      const location = autocomplete.getPlace();
      // Call the provided callback with the location
      callback(location);
    })
  });
}

/* Displays the google map element on the page.
 * Takes the element and the latitude, longtitude position on the map.
 */
export function displayMap(element, location) {
  googleMaps().then(maps => {
    const farmLocation = { lat: location[0], lng: location[1] };
    const map = new google.maps.Map(element, {
      zoom: 14,
      center: farmLocation
    });
    const marker = new google.maps.Marker({
      position: farmLocation,
      map: map,
    });
  })
}
