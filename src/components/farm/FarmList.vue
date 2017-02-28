<template>
  <div class="farm-list">
    <farm-card v-for="farm in farms" :farm="farm" :key="farm.key"></farm-card>
  </div>
</template>

<script>
import GeoFire from 'geofire';
import FarmCard from './FarmCard'

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: []
    }
  },
  methods: {
    // Finds the closest farms to the user location
    getClosestFarms () {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations);
      const geoQuery = geoFire.query({
        center: [32.290315299999996, 34.9400146],
        radius: 10.5
      });

      // Add the farms that meeting the query's criterias to the farms list
      geoQuery.on("key_entered", (key, location, distance) => {
        // Retrieve the farm from the farms list using it's key
        const farm = this.$store.state.farms.find(key);
        console.log(farm);
        // this.farms.push(this.$store.state)
      });

    }
  },
  created () {
    this.getClosestFarms();
    this.farms = this.$store.state.farms
  }
}
</script>

<style>
</style>
