import GeoFire from 'geofire';
import FarmCard from '../FarmCard';
import { getPositionByIP } from '../../../helpers/Location';
import { initGMAutoComplete } from '../../../helpers/GoogleWidgets';

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: [],
      loading: true,
      geoQuery: {},
      searchPosition: null
    }
  },
  computed: {
    currentLocation () {
      return this.$store.state.currentLocation;
    },
    // Keep the radius in the store, in order to keep it's value when
    // navigating away from the component
    radius: {
      get () {
        return this.$store.state.radius;
      },
      set (value) {
        this.$store.commit('UPDATE_RADIUS', value);
      }
    }
  },
  methods: {
    // Reset farm list array
    resetFarmList () {
      this.loading = true;
      this.farms = [];
    },
    getUserLocation () {
      this.resetFarmList();
      this.$store.dispatch('GET_USER_LOCATION');
    },
    // Called when search button being clicked
    searchFarms () {
      if (this.searchPosition != null) {
        this.resetFarmList();
        const coords = this.searchPosition.geometry.location;
        this.$store.commit('UPDATE_LOCATION', [ coords.lat(), coords.lng() ]);
      }
    },
    // Finds the closest farms to the  user location
    getClosestFarms () {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations); // TODO: Use a global geofire object
      this.geoQuery = geoFire.query({
        center: [this.currentLocation[0], this.currentLocation[1]],
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
        this.loading = false;
        /* Adds 5km to the current radius until it reaches the radius.
           This is so the farms would be displayed sorted by thier distance from the current location.
           For more info: https://github.com/firebase/geofire-js/issues/59#issuecomment-70350560
         */
        if (this.geoQuery.radius() < parseInt(this.radius)) {
          this.geoQuery.updateCriteria({ radius: this.geoQuery.radius() + 5 });
        }
      });
    }
  },
  watch: {
    currentLocation: function (newLocation) {
      if (newLocation != null) {
        this.getClosestFarms();
      }
    }
  },
  metaInfo: {
    title: 'ישר מהשדה',
    titleTemplate: null
  },
  mounted () {
    // Init google autocomplete widget
    const element = document.getElementById('farm-search__field');
    initGMAutoComplete(element, location => {
      this.searchPosition = location;
    });

    // Display farms if has user's location
    if (this.currentLocation) {
      this.getClosestFarms();
    }
    // Gets the user location by IP if not
    else {
      getPositionByIP.then(pos => {
        this.$store.commit('UPDATE_LOCATION', pos);
      })
    }
  }
}
