import Vue from 'vue';
import store from '../../../store';
import GeoFire from 'geofire';

import { initGMAutoComplete } from '../../../helpers/GoogleWidgets';
import Modal from '../../layout/Modal';

import VeeValidate from 'vee-validate';
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
  components: {
    Modal
  },
  mounted () {
    // Init the google autocomplete widget with the location input element
    const input = document.getElementById('location');
    initGMAutoComplete(input, location => this.location = location);
  },
  data () {
    return {
      'showModal': false,
      'name': '',
      'location': '',
      'phone': '',
      'email': '',
      'website': '',
      'facebook': '',
      'description': '',
      'props': {
        'organic': false,
        'pest_control': false,
        'direct_sell': false,
        'online_sell': false,
        'shipping': false,
        'kosher': false
      }
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
        'name': this.name,
        'phone': this.phone,
        'street': this.location.name,
        'city': this.location.vicinity,
        'email': this.email,
        'website': this.website,
        'facebook': this.facebook,
        'description': this.description,
        'props': {
          'organic': this.props.organic,
          'pest_control': this.props.pest_control,
          'direct_sell': this.props.direct_sell,
          'online_sell': this.props.online_sell,
          'shipping': this.props.shipping,
          'kosher': this.props.kosher
        }
      }, err => {
        if (err) {
          console.log(err); // TODO: Display message to user
          return;
        }
        // Farm was submitted sucessfuly
        const coords = this.location.geometry.location;
        this.addLocation(farm.key, coords);
        this.showModal = true // Display sucess message to user
      });
    },
    // Add the farm's location coordinates to the GeoFire database
    addLocation (key, coords) {
      const geofire = new GeoFire(this.$root.$firebaseRefs.locations);
      geofire.set(key, [coords.lat(), coords.lng()]);
    },
    resetForm () {
      this.name = '';
      document.getElementById('location').value = '';
      this.phone = '';
      this.email = '';
      this.website = '';
      this.facebook = '';
      this.description = '';
      this.props.organic = false;
      this.props.direct_sell = false;
      this.props.online_sell = false;
      this.props.shipping = false;
      this.props.kosher = false;
    }
  },
  // Make sure only authorized users can submit access the component
  beforeRouteEnter (to, from, next) {
    if (!store.state.User.info) next('/login#add-farm');
    else next();
  }
}
