import mapsapi from 'google-maps-api';
import { googleAPIKey } from '../../../config/env';

export const googleMaps = mapsapi(googleAPIKey, ['places']);

// Inits the Google Maps Autocomplete plugin.
// Takes the vm instance as parameter.
export function initGMAutoComplete(vm) {
  googleMaps().then(maps => {
    const input = document.getElementById('location');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      const location = autocomplete.getPlace();
      vm.location = location;
    })
  });
}

/* Displays the google map element on the page.
 * Takes the element and the latitude, longtitude position on the map.
 */
export function displayMap(element, latlng) {
  googleMaps().then(maps => {
      var uluru = { lat: -25.363, lng: 131.044 };
      var map = new google.maps.Map(element, {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
  })
}
