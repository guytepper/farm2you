<template>
  <div class="farm-list">
    <farm-card v-for="farm in farms" :farm="farm"></farm-card>
  </div>
</template>

<script>
import FarmCard from './FarmCard'

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: []
    }
  },
  created () {
    this.farms = this.$store.state.farms
  }
}
</script>

<style>
</style>
