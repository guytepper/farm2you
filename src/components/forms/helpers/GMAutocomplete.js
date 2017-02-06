/* Inits the Google Maps Autocomplete plugin.
*/

import mapsapi from 'google-maps-api';
import { googleAPIKey } from '../../../config/env';

const myGoogleMaps = mapsapi(googleAPIKey, ['places']);

/* The function inits the autocomplete plugin,
 * Takes the vm instance as parameter.
 */
export default function googleMapsInit(vm) {
  myGoogleMaps().then(maps => {
    const input = document.getElementById('location');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      const location = autocomplete.getPlace();
      vm.location = location;
    })
  });
}
