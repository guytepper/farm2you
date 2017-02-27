<template>
  <div class="pending-farms">
    <h1>אישור משקים</h1>
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
        <div v-if="farm.email">
          <span class="pending-farm__info-label">אימייל:</span>
          <span>{{ farm.email }}</span>
        </div>
        <div v-if="farm.website">
          <span class="pending-farm__info-label">אתר אינטרנט: </span>
            <a :href="farm.website" target="_blank">כניסה לאתר</a>
        </div>
        <div v-if="farm.facebook">
          <span class="pending-farm__info-label">פייסבוק: </span>
            <a :href="farm.facebook" target="_blank">כניסה לעמוד</a>
        </div>
        <div v-if="farm.description">
          <span class="pending-farm__info-label">תיאור:</span>
          <span>{{ farm.description }}</span>
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
      <div class="form-submit pending-farms-buttons">
        <button @click="disapproveFarm(farm['.key'])" class="mui-btn mui-btn--raised mui-btn--danger">מחיקת משק</button>
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
    // Get the pending farm's refrence from database
    getPendingFarm (farmKey) {
      return this.$root.$firebaseRefs.pending_farms.child(farmKey);
    },
    // Add the pending farm to the farms database
    approveFarm (farmKey) {
      const pendingFarmRef = this.getPendingFarm(farmKey);
      let pendingFarmObj = null;
      // Get the pending farm actual value
      pendingFarmRef.once('value', snapshot => pendingFarmObj = snapshot.val());
      // Add the pending farm to the approved farms database
      this.$root.$firebaseRefs.farms.push(pendingFarmObj);
      // Remove pending farm from the pending farms database
      pendingFarmRef.set(null);
    },
    // Remove pending farm & it's location
    disapproveFarm (farmKey) {
      if (window.confirm('בטוח שברצונך למחוק את החווה?')) {
        const pendingFarm = this.getPendingFarm(farmKey);
        const location = this.$root.$firebaseRefs.locations.child(farmKey);

        pendingFarm.set(null);
        location.set(null);
      }
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

.pending-farms-buttons {
  .mui-btn {
    margin: 5px;
  }
}

</style>
