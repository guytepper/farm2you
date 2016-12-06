<template>
  <div class="pending-farms">
    <div v-for="farm in farms" class="panel pending-farm">
      <h1>{{ farm.name }}</h1>
      <div class="divider"></div>
      <div class="pending_farm__info">
        <span class="pending-farm__info-label">כתובת:</span>
        <span>{{ farm.address }}</span>
      </div>
      <div class="pending_farm__info">
        <span class="pending-farm__info-label">טלפון:</span>
        <span>{{ farm.phone }}</span>
      </div>
      <div class="pending_farm__info">
        <span class="pending-farm__info-label">אימייל:</span>
        <span>{{ farm.email }}</span>
      </div>

      <div class="mui-checkbox">
        <label>
          <input type="checkbox" :checked="farm.props.organic" disabled>
          אורגני
        </label>
      </div>

      <div class="mui-checkbox">
        <label>
          <input type="checkbox" :checked="farm.props.direct_sell" disabled>
          מכירה ישירה
        </label>
      </div>

      <div class="mui-checkbox">
        <label>
          <input type="checkbox" :checked="farm.props.online_sell" disabled>
            מכירה באינטרנט
        </label>
      </div>

      <div class="mui-checkbox">
        <label>
          <input type="checkbox" :checked="farm.props.shipping" disabled>
          משלוחים
        </label>
      </div>

      <div class="mui-checkbox">
        <label>
          <input type="checkbox" :checked="farm.props.kosher" disabled>
          כשר
        </label>
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

.pending-farm__info-label {
  font-weight: bold
}

</style>
