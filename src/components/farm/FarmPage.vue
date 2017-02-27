<template>
  <div>
    <h2>{{ farm.name }}</h2>
    <iframe
      width="600"
      height="450"
      frameborder="0" style="border:0"
      allowfullscreen
      :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDwGSU6pEh70Jx3xtp1JZBqehR0_nZ_FZQ&q=' + farm.name">
    </iframe>
  </div>
</template>

<script>
// TODO: Use the enviorment API key instead of the static one
// import { googleAPIKey } from '../../config/env.js';

export default {
  name: 'farm-page',
  data () {
    return {
      farm: {},
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
</style>
