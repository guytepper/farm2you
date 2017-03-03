<template>
  <div class="farm-list">

    <div class="farm-search panel">
      <label for="radius">רדיוס</label>
      <div class="mui-select">
        <select v-model="radius" id="radius">
          <option>5</option>
          <option>10</option>
        </select>
      </div>
      <!-- Temporary disable search panel -->
      <!-- <div class="mui-textfield">
        <input class="farm-search__field" type="text" placeholder="כתובת מגורים">
      </div>
      <div class="farm-search__buttons">
        <button class="mui-btn mui-btn--raised mui-btn--primary">חיפוש</button>
      </div> -->
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
      radius: 5,
      currentLocation: null
    }
  },
  methods: {
    // Finds the closest farms to the  user location
    getClosestFarms () {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations); // TODO: Use a global geofire object
      const geoQuery = geoFire.query({
        center: [32.290315299999996, 34.9400146],
        radius: 5
      });

      const farmsAround = [];

      // Add the farms that meeting the query's criterias to the farms list
      geoQuery.on("key_entered", (key, location, distance) => {
        // Retrieve the farm from the farms list using it's key
        const farm = this.$store.state.farms.find(farm => farm['.key'] === key);
        farmsAround.push(farm)
      });

      // Updates the farms whenever the query changes
      geoQuery.on("ready", () => {
        this.farms = farmsAround;

        // Adds 5km to the current radius until it reaches 30. This is so the farms would be displayed
        // sorted by thier distance from the current location.
        // For more info: https://github.com/firebase/geofire-js/issues/59#issuecomment-70350560
        if (geoQuery.radius() < 30) {
          geoQuery.updateCriteria({ radius: geoQuery.radius() + 5 });
        }
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
    flex-wrap: wrap;


    .mui-textfield {
      margin-left: 15px;
      flex: 1 1 300px;
    }
  }

  .farm-search__buttons {
    display: flex;
    flex: 1 1;

    .mui-btn {
      flex: 1;
      margin: 0 5px;
      min-width: 150px;
    }
  }


</style>
