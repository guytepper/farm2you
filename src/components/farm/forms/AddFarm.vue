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
      <input type="url" id="website" placeholder="אתר אינטרנט">
      <label for="website">אתר אינטרנט</label>
    </div>

    <div class="mui-checkbox">
      <label>
      <input type="checkbox" value="">
      אורגני
      </label>
    </div>
    <div class="mui-checkbox">
      <label>
      <input type="checkbox" value="">
      משלוחים
      </label>
    </div>
    <div class="mui-checkbox">
      <label>
      <input type="checkbox" value="">
      מכירה ישירה במשק
      </label>
    </div>

    <div class="form-submit">
      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">הוספת משק</button>
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

<style style="sass">
@import '~muicss/dist/css/mui-rtl.css';

.add-farm {
  /*display: flex;
  flex-direction: column;
  justify-content: center;*/
}

.form-submit {
  display: flex;
  justify-content: flex-end;
}

</style>
