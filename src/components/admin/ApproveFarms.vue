<template>
  <div class="pending_farms">
    <div v-for="farm in farms" class="panel">
      <h1>{{ farm.name }}</h1>
      <div class="divider"></div>
      <div class="">
        <span>כתובת:</span>
        <span>{{ farm.address }}</span>
      </div>
      <div class="">
        <span>טלפון:</span>
        <span>{{ farm.phone }}</span>
      </div>
      <div class="">
        <span>אימייל:</span>
        <span>{{ farm.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      farms: this.$store.state.pending_farms
    }
  }
}
</script>

<style lang="scss">
</style>
