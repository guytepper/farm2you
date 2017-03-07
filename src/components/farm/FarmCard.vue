<template >
  <div class="farm-card panel" :farm-id="farm['.key']">
    <div class="farm-card__info">
      <h2 class="farm-card__name">
        <router-link :to="{ name: 'farm', params: { id: farm['.key'], location: '123' }}">{{ farm.name }}</router-link>
      </h2>
      <div class="farm-card__props">
        <span v-if="farm.props.organic" class="farm-card__props-item">
          <img src="/static/images/icons/organic.svg" class="farm-card__icon" alt="">
          <span class="farm-card__props-item-title">אורגני</span>
        </span>
        <span v-if="farm.props.shipping" class="farm-card__props-item">
          <img src="/static/images/icons/shipping.svg" class="farm-card__icon" alt="">
          <span class="farm-card__props-item-title">משלוחים</span>
        </span>
        <span v-if="farm.props.direct_sell" class="farm-card__props-item">
          <img src="/static/images/icons/store.svg" class="farm-card__icon" alt="">
          <span class="farm-card__props-item-title">מכירה ישירה</span>
        </span>
        <span v-if="farm.props.online_sell" class="farm-card__props-item">
          <img src="/static/images/icons/computer.svg" class="farm-card__icon" alt="">
          <span class="farm-card__props-item-title">הזמנה באינטרנט</span>
        </span>
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

  .farm-card__props {
    margin: 5px 0;
  }

  .farm-card__props-item {
    display: inline-flex;
    margin-left: 5px;
  }

  .farm-card__props-item-title {
  }

  .farm-card__icon {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
</style>
