<template>
  <div class="">
    <gm-autocomplete v-model="place"></gm-autocomplete>
  </div>
</template>

<script>
import GMAutocomplete from './helpers/GMAutocomplete'

export default {
  name: 'add-farm',
  components: { 'gm-autocomplete': GMAutocomplete },
  data () {
    return {
      place: null
    }
  }
}
</script>

<style>
</style>
