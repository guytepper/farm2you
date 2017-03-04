<template>
  <div class="panel">
    <h2 class="farm-name">משק בן יהודה</h2>
    <h3 class="farm-description">אחלה חווה שבעולם</h3>
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

<style lang="css">
.farm-name {
  margin: 0;
  margin-bottom: 20px;
}


</style>
