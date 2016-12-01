import Vue from 'vue';
import VeeValidate from 'vee-validate';
import GeoFire from 'geofire';
import initGMAutoComplete from '../helpers/GMAutocomplete.js';
import heMessages from '../strings/heMessages.js';
import heAttributes from '../strings/heAttributes.js';

Vue.use(VeeValidate, {
  locale: 'he',
  dictionary: {
    he: {
        messages: heMessages,
        attributes: heAttributes
    }
  }
});

export default {
  name: 'add-farm',
  created () {
    initGMAutoComplete(this)
  },
  data () {
    return {
      'name': '',
      'location': '',
      'phone': '',
      'email': ''
    }
  },
  methods: {
    validateBeforeSubmit (e) {
      this.$validator.validateAll();

      if (this.errors.any()) {
          e.preventDefault();
      }
      else {
        this.addFarm();
      }
    },
    addFarm () {
      const farm = this.$root.$firebaseRefs.pending_farms.push({
        name: this.name,
        phone: this.phone,
        address: this.location.name + ', ' + this.location.vicinity
      });

      const coords = this.location.geometry.location;
      this.addLocation(farm.key, coords)
    },
    // Add the farm's location coordinates to the GeoFire database
    addLocation (key, coords) {
      const geofire = new GeoFire(this.$root.$firebaseRefs.locations);
      geofire.set(key, [coords.lat(), coords.lng()]);
    }
  }
}
