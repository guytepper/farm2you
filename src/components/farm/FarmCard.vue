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
      <div class="farm-card__location">
        {{ this.distance }}
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
      console.log(location1, location2);
      this.distance = distance(location1, location2)
    },
    getLocation() {
      const geoFire = new GeoFire(this.$root.$firebaseRefs.locations);
      geoFire.get(this.farm['.key']).then(location => {
        console.log(this.$store.state.current_location);
        this.location = location;
        this.setDistance(location, this.$store.state.current_location);
      });
    }
  },
  created () {
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
