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
      const farm = this.$root.$firebaseRefs.farms.push({
        name: this.name,
        phone: this.phone,
        address: this.location.name + ', ' + this.location.vicinity
      });
    }
  }
}
