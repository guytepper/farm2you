<template>
  <div class="pending-farms">
    <div v-for="farm in farms" class="panel pending-farm">
      <h1 class="pending-farm__name">{{ farm.name }}</h1>
      <div class="divider"></div>
      <div class="pending-farm__info">
        <div>
          <span class="pending-farm__info-label">כתובת:</span>
          <span>{{ farm.address }}</span>
        </div>
        <div>
          <span class="pending-farm__info-label">טלפון:</span>
          <span>{{ farm.phone }}</span>
        </div>
        <div>
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
      <div class="form-submit">
        <button @click="approveFarm(farm['.key'])" class="mui-btn mui-btn--raised mui-btn--primary">אישור משק</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    farms () {
      return this.$store.state.pending_farms
    }
  },
  methods: {
    // Add the pending farm to the farms database, using it's key
    approveFarm (farmKey) {
      // Get the pending farm object value from the pending farms database
      const pendingFarmRef = this.$root.$firebaseRefs.pending_farms.child(farmKey);
      let pendingFarmObj = null;
      pendingFarmRef.once('value', snapshot => pendingFarmObj = snapshot.val());

      // Add the pending farm to the approved farms database
      this.$root.$firebaseRefs.farms.push(pendingFarmObj);
      // Remove pending farm from the pending farms database
      pendingFarmRef.set(null);

    }
  }
}
</script>

<style lang="scss">

.pending-farm__name {
  margin: 0 0 10px;
}

.pending-farm__info {
  margin-top: 10px;
}

.pending-farm__info-label {
  font-weight: bold
}

</style>
