<template>
    <input type="text" id="location" placeholder="כתובת המשק">
</template>

<script>
import mapsapi from 'google-maps-api';
const myGoogleMaps = mapsapi('AIzaSyD93NWdLgraXWFj_82Wvzz5m58827p_vr0', ['places']);

export default {
  name: 'gm-autocomplete',
  created () {
    const vm = this;
    myGoogleMaps().then(maps => {
      const input = document.getElementById('location');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        vm.updatePlace(place);
      })
    });
  },
  methods: {
    updatePlace(place) {
      console.log();
      this.$store.commit('setLocation', { place })
    }
  }
}
</script>
