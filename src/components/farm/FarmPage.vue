<template>
  <div class="panel" itemscope itemtype="http://schema.org/LocalBusiness">
    <h2 class="farm-name" itemprop="name">משק בן יהודה</h2>
    <h3 class="farm-description" itemprop="description">אחלה חווה שבעולם</h3>

    <div class="farm-info">
      <div class="farm-info__right-section">
        <div class="farm-info__item" itemscope itemtype="http://schema.org/PostalAddress">
        <img src="/static/images/icons/place.svg" class="farm-info__icon" alt="">
        <span itemprop="address">הרימונים 33</span>
      </div>
      <div class="farm-info__item">
        <img src="/static/images/icons/phone.svg" class="farm-info__icon" alt="">
        <span itemprop="telephone">09-8949380</span>
      </div>
      <div class="farm-info__item">
        <img src="/static/images/icons/website.svg" class="farm-info__icon" alt="">
        <a href="#">haorganit.co.il</a>
      </div>
      <div class="farm-info__item">
        <img src="/static/images/icons/email.svg" class="farm-info__icon" alt="">
        <a href="mailto:#">haorganit@gmail.com</a>
      </div>            
      <div class="farm-info__item">
        <img src="/static/images/icons/facebook.svg" class="farm-info__icon" alt="">
        <a href="#">עמוד פייסבוק</a>
      </div>
    </div>
    <div class="farm-info__left-section">
      <div class="farm-info__item">
        <img src="/static/images/icons/shipping.svg" class="farm-info__icon" alt="">
        <span>משלוחים</span>
      </div>
      <div class="farm-info__item">
        <img src="/static/images/icons/store.svg" class="farm-info__icon" alt="">
        <span>מכירה במקום</span>
      </div>
      <div class="farm-info__item">
        <img src="/static/images/icons/computer.svg" class="farm-info__icon" alt="">
        <span>רכישה באינטרנט</span>
      </div>
    </div>

    </div>
  </div>
    <!--
  <div v-if="farm" class="panel">
    <h2 class="farm-name">{{ farm.name }}</h2>
    <h3 class="farm-description" v-if="farm.description">{{ farm.description }}</h3>
    <ul>
      <li></li>
    </ul>

    <iframe
      width="100%"
      height="450"
      frameborder="0" style="border:0"
      allowfullscreen
      :src="'https://www.google.com/maps/embed/v1/place?key='+ apiKey + '&q=' + farm.name">
    </iframe>
  </div>
  -->
</template>

<script>
// TODO: Use the enviorment API key instead of the static one
import { googleMapsAPIKey } from '../../config/env.js';

export default {
  name: 'farm-page',
  data () {
    return {
      farm: {},
      apiKey: googleMapsAPIKey
    }
  },
  created () {
    // Get farm using ID parameter from route
    const farmId = this.$route.params.id;
    const farms = this.$store.state.farms;
    this.farm = farms.find(farm => farm['.key'] === farmId)
  }
}
</script>

<style lang="scss">
  .farm-name {
    margin: 0;
    margin-bottom: 20px;
  }

  .farm-info__item {
    display: flex;

    span {
      // font-weight: bold;
    }
  }

  .farm-info__icon {
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }
</style>
