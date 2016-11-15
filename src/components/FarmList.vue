<template>
  <div class="farm-list">
    <farm-card v-for="farm in farms" :farm="farm"></farm-card>
  </div>
</template>

<script>
import FarmCard from './FarmCard'
export default {
  props: ['farms'],
  components: { FarmCard }
}
</script>

<style>
</style>
