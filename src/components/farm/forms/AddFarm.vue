<template>
  <div class="add-farm">


    <div class="mui-textfield">
      <input type="text" id="farm-name" placeholder="שם המשק">
      <label for="farm-name">שם המשק</label>
    </div>

    <div class="mui-textfield">
      <gm-autocomplete v-model="place"></gm-autocomplete>
      <label for="location">מיקום</label>
    </div>

    <div class="mui-textfield">
      <input type="tel" id="phone" placeholder="טלפון המשק">
      <label for="phone">טלפון</label>
    </div>

    <div class="mui-textfield">
      <input type="website" id="website" placeholder="טלפון המשק">
      <label for="website">טלפון</label>
    </div>


  </div>
</template>

<script>
import GMAutocomplete from './helpers/GMAutocomplete'

export default {
  name: 'add-farm',
  components: { 'gm-autocomplete': GMAutocomplete },
  data () {
    return {
      name: '',
      location: null
    }
  }
}
</script>

<style style="scss">
@import '~muicss/dist/css/mui-rtl.css';

.add-farm {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
