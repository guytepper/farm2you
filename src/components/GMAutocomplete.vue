<template>
    <input type="text" id="address" :value="'fdf'">
</template>

<script>
import mapsapi from 'google-maps-api';
const myGoogleMaps = mapsapi('AIzaSyD93NWdLgraXWFj_82Wvzz5m58827p_vr0', ['places']);

export default {
  name: 'gm-autocomplete',
  data () {
    return {
      'place': null
    }
  },
  created () {
    const vm = this;
    myGoogleMaps().then(maps => {
      const input = document.getElementById('address');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        vm.place = place;
        vm.updatePlace(place)
        // if (!vm.place.geometry) {
        //   window.alert("No details available for input: '" + place.name + "'");
        //   return;
        // }
      })
    });
  },
  methods: {
    updatePlace(place) {
      this.$emit('input', place)
    }
  }
}
</script>
