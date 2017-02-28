<template >
  <div class="farm-card panel" :farm-id="farm['.key']">
    <img src="/static/images/farm-img-placeholder.jpg" alt="" class="farm-card__img"
        srcset="/static/images/farm-img-placeholder@2x.jpg 2x" />
    <div class="farm-card__info">
      <h2 class="farm-card__name">
        <router-link :to="{ name: 'farm', params: { id: farm['.key'] }}">{{ farm.name }}</router-link>
      </h2>
      <div class="farm-card__props">
        אורגני, משלוחים
      </div>
      <div class="farm-card__location" v-if="distance">
        {{ this.distance }} ק״מ ממיקומך
      </div>
    </div>
  </div>
</template>

<script>
import GeoFire from 'geofire';
import { distance } from '../../helpers/Location';

export default {
  name: 'farm-card',
  props: ['farm'],
  data () {
    return {
      location: null,
      distance: null
    }
  },
  methods: {
    // Calculates & sets the distance between the farm and the user's location
    setDistance(location1, location2) {
      this.distance = distance(location1, location2);
      const distanceFromFarm = distance(location1, location2);
      this.distance = Math.round(distanceFromFarm);

    },
    getLocation() {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations);
      geoFire.get(this.farm['.key']).then(location => {
        this.location = location;
        /* The user might not allow using it's location, or the information might
           arrive after the component has been created.
           Therefor, if the user's location exists, we can set the distance. If not,
           we set a watcher on the current location prop on the state.
        */
        if (this.$store.state.current_location) {
          this.setDistance(location, this.$store.state.current_location);
        }
        else {
          this.$store.watch(state => state.current_location, () => {
            if (this.$store.state.current_location != null) {
              this.setDistance(location, this.$store.state.current_location);
            }
          });
        }
      });
    }
  },
  mounted () {
    this.getLocation();
  }
}
</script>

<style lang="css">
  .farm-card {
    display: flex;
    margin-bottom: 10px;
  }

  .farm-card__name {
    margin: 0;
  }

  .farm-card__img {
    width: 80px;
    height: 80px;
    margin-left: 10px;
  }
</style>
