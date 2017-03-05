<template >
  <div class="farm-card panel" :farm-id="farm['.key']">
    <img src="/static/images/farm-img-placeholder.jpg" alt="" class="farm-card__img"
        srcset="/static/images/farm-img-placeholder@2x.jpg 2x" />
    <div class="farm-card__info">
      <h2 class="farm-card__name">
        <router-link :to="{ name: 'farm', params: { id: farm['.key'], location: '123' }}">{{ farm.name }}</router-link>
      </h2>
      <div class="farm-card__props">
        אורגני, משלוחים
      </div>
      <div class="farm-card__location" v-if="distance">
        {{ distance }} ק״מ ממיקומך
      </div>
    </div>
  </div>
</template>

<script>
import GeoFire from 'geofire';
import { distance, getFarmLocation } from '../../helpers/Location';

export default {
  name: 'farm-card',
  props: ['farm', 'currentLocation'],
  data () {
    return {
      location: null,
      distance: null
    }
  },
  methods: {
    // Returns the distance between the farm and the user's location
    calculateDistance(location1, location2) {
      const distanceFromFarm = distance(location1, location2);
      // Rounds the distance, so only the first digist is returned
      return Math.round(distanceFromFarm);
    },
  },
  mounted () {
    getFarmLocation(this.farm['.key']).then(location => {
      this.location = location;
      // If the current user location exists, calculate the distance from him to the farm
      if (this.currentLocation) {
        this.distance = this.calculateDistance(this.currentLocation, this.location);
      }
    })
  },
  watch: {
    currentLocation (newCurrentLocation) {
      if (newCurrentLocation != null) {
        this.distance = this.calculateDistance(newCurrentLocation, this.location);
      }
    }
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
