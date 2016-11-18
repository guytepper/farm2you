<template>
  <div>
    {{ farm.properties.name }}
  </div>
</template>

<script>
export default {
  name: 'farm-page',
  data () {
    return {
      farm: {}
    }
  },
  created () {
    // Get farm using ID parameter from route
    const farmId = parseInt(this.$route.params.id);
    const farms = this.$store.state.farms;
    this.farm = farms.find(farm => farm.id === farmId)
  }
}
</script>

<style lang="css">
</style>
