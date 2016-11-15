<template>
  <div class="farm-list">
    <farm-card v-for="farm in farms" :farm="farm"></farm-card>
  </div>
</template>

<script>
import FarmCard from './FarmCard'
import axios from 'axios'

export default {
  components: { FarmCard },
  data: function() {
    return {
      farms: []
    }
  },
  created: function() {
    axios.get('/api/farm').then(res => {
      this.$data.farms = res.data;
      console.log(this.$data.farms);
    });
  }
}
</script>

<style>
</style>
