<template>
  <div class="farm-list">
    <div class="farm-search panel">
      <div class="mui-textfield">
        <input class="farm-search__field" type="text" placeholder="כתובת מגורים">
      </div>
      <div class="farm-search__buttons">
        <button class="mui-btn mui-btn--raised mui-btn--primary">חיפוש</button>
        <button class="mui-btn mui-btn--raised mui-btn--blue">שימוש במיקום נוכחי</button>
      </div>
    </div>
    <farm-card v-for="farm in farms" :farm="farm" :key="farm.key" :current-location="currentLocation"></farm-card>
  </div>
</template>

<script>
import GeoFire from 'geofire';
import FarmCard from './FarmCard'

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: [],
      currentLocation: null
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
        const farm = this.$store.state.farms.find(farm => farm['.key'] === key);
        this.farms.push(farm)
      });
    },
    getLocation() {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations);
      /* The user might not allow using it's location, or the information might
         arrive after the component has been created.
         Therefore, if the user's location exists, we can set the distance. If not,
         we set a watcher on the current location prop on the state.
      */
      if (this.$store.state.currentLocation) {
        this.currentLocation = this.$store.state.currentLocation;
      }
      else {
        this.$store.watch(state => state.currentLocation, () => {
          if (this.$store.state.currentLocation != null) {
            this.currentLocation = this.$store.state.currentLocation;
          }
        });
      }
    }
  },
  created () {
    this.getLocation();
    this.getClosestFarms();
  }
}
</script>

<style lang="scss">
  .farm-search {
    display: flex;
    flex-direction: column;


    .mui-textfield {
      margin-left: 15px;
    }
  }

  .farm-search__buttons {
    display: flex;

    .mui-btn {
      flex: 1;
      margin: 0 5px;
    }
  }


</style>
