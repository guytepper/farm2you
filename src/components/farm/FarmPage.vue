<template>
  <div v-if="!farm" class="panel">
    טוען...
  </div>
  <div v-else class="panel" itemscope itemtype="http://schema.org/LocalBusiness">
    <h2 class="farm-name" itemprop="name">{{ farm.name }}</h2>
    <h3 class="farm-description" itemprop="description" v-if="farm.description">{{ farm.description }}</h3>

    <div class="farm-info">
      <div class="farm-info__right-section">
        <div class="farm-info__item" itemscope itemtype="http://schema.org/PostalAddress">
          <img src="/static/images/icons/place.svg" class="farm-info__icon" alt="">
          <span itemprop="address">{{ farm.address }}</span>
        </div>
        <div class="farm-info__item" v-if="farm.phone">
          <img src="/static/images/icons/phone.svg" class="farm-info__icon" alt="">
          <span itemprop="telephone">{{ farm.phone }}</span>
        </div>
        <div class="farm-info__item" v-if="farm.website">
          <img src="/static/images/icons/website.svg" class="farm-info__icon" alt="">
          <a :href="farm.website">{{ farm.website }}</a>
        </div>
        <div class="farm-info__item" v-if="farm.email">
          <img src="/static/images/icons/email.svg" class="farm-info__icon" alt="">
          <a :href="'mailto:' + farm.email ">{{ farm.email }}</a>
        </div>
        <div class="farm-info__item" v-if="farm.facebook">
          <img src="/static/images/icons/facebook.svg" class="farm-info__icon" alt="">
          <a :href="farm.facebook">עמוד פייסבוק</a>
        </div>
      </div>
      <div class="farm-info__left-section" v-if="farm.props">
        <div class="farm-info__item" v-if="farm.props.shipping">
          <img src="/static/images/icons/shipping.svg" class="farm-info__icon" alt="">
          <span>משלוחים</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.direct_sell">
          <img src="/static/images/icons/store.svg" class="farm-info__icon" alt="">
          <span>מכירה במקום</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.online_sell">
          <img src="/static/images/icons/computer.svg" class="farm-info__icon" alt="">
          <span>רכישה באינטרנט</span>
        </div>
      </div>
    </div>
    <div id="map"></div>
  </div>
  -->
</template>

<script>
// TODO: Use the enviorment API key instead of the static one
import { googleMapsAPIKey } from '../../config/env.js';
import { displayMap } from '../forms/helpers/GMAutocomplete';
import { getFarmLocation } from '../../helpers/Location';

export default {
  name: 'farm-page',
  props: ['id'],
  data () {
    return {
      farm: null,
      apiKey: googleMapsAPIKey
    }
  },
  methods: {
    // Fetch the farm using ID parameter from route
    fetchFarm() {
      return new Promise((resolve, reject) => {
        const farmId = this.id;
        const farmRef = this.$root.$firebaseRefs.farms.child(farmId);
        farmRef.once('value', snapshot => resolve(snapshot.val()));
      })
    }
  },
  created () {
    this.fetchFarm().then(farm => {
      this.farm = farm;
      getFarmLocation(this.id).then(location => {
        displayMap(document.getElementById('map'), location);
      });
    });
  },
}
</script>

<style lang="scss">
  .farm-name {
    margin: 0;
    margin-bottom: 20px;
  }

  .farm-info__item {
    display: flex;
    margin-bottom: 10px;
  }

  .farm-info__icon {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }

  #map {
    width: 100%;
    height: 300px;
  }
</style>
