<template>
  <div class="farm-list">

    <div class="farm-search panel">
      <label for="select-radius" class="select-radius-label">רדיוס חיפוש (בק״מ):
        <select v-model="radius" id="select-radius" @change="getClosestFarms">
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
        </select>
      </label>
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
      radius: 20,
      currentLocation: null,
      geoQuery: {}
    }
  },
  methods: {
    // Finds the closest farms to the  user location
    getClosestFarms () {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations); // TODO: Use a global geofire object
      this.geoQuery = geoFire.query({
        center: [32.290315299999996, 34.9400146],
        radius: 5
      });

      const farmsAround = [];

      // Add the farms that meeting the query's criterias to the farms list
      this.geoQuery.on("key_entered", (key, location, distance) => {
        // Retrieve the farm from the farms list using it's key
        const farm = this.$store.state.farms.find(farm => farm['.key'] === key);
        farmsAround.push(farm)
      });

      // Updates the farms whenever the query changes
      this.geoQuery.on("ready", () => {
        this.farms = farmsAround;

        /* Adds 5km to the current radius until it reaches the radius.
           This is so the farms would be displayed sorted by thier distance from the current location.
           For more info: https://github.com/firebase/geofire-js/issues/59#issuecomment-70350560
         */
        if (this.geoQuery.radius() < parseInt(this.radius)) {
          this.geoQuery.updateCriteria({ radius: this.geoQuery.radius() + 5 });
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

  .select-radius-label {
    display: flex;
    align-items: center;
  }

  #select-radius {
    width: 50px;
    margin-right: 10px;
    text-align-last: center;
  }

</style>
