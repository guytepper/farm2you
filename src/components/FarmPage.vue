<template>
  <div>
    {{ farm.name }}
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
    const farmId = this.$route.params.id;
    const farms = this.$store.state.farms;
    console.log(farmId, farms);
    this.farm = farms.find(farm => farm['.key'] === farmId)
  }
}
</script>

<style lang="css">
</style>
