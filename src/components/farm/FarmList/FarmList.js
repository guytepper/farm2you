import GeoFire from 'geofire';
import FarmCard from '../FarmCard';
import { initGMAutoComplete } from '../../../helpers/GoogleWidgets';

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: [],
      loaded: false,
      currentLocation: null,
      geoQuery: {},
      searchPosition: null
    }
  },
  computed: {
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
        this.loaded = true;
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
      /* The user might not allow using his location, or the information might
         arrive after the component has been created.
         Therefore, if the user's location exists in the store's state, we can set the distance.
         Otherwise, we set a watcher on the current location prop on the state.
      */
      if (this.$store.state.currentLocation) {
        this.currentLocation = this.$store.state.currentLocation;
        // Fetch the closest farms
        this.getClosestFarms();
      }
      else {
        this.$store.watch(state => state.currentLocation, () => {
          if (this.$store.state.currentLocation != null) {
            this.currentLocation = this.$store.state.currentLocation;
            this.getClosestFarms();
          }
        });
      }
    }
  },
  mounted () {
    // Get the user location
    this.getLocation();
    // Init google autocomplete widget
    const element = document.getElementById('farm-search__field');
    initGMAutoComplete(element, location => this.searchPosition = location);
  }
}
