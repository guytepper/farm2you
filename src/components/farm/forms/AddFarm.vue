<template>
  <div class="add-farm">
    <div class="mui-textfield" :class="{ 'error': errors.has('farm-name') }">
      <input v-validate data-vv-rules="required" type="text" id="farm-name" name="farm-name" placeholder="שם המשק / חקלאי">
      <label for="farm-name">שם המשק</label>
      <span v-show="errors.has('farm-name')" class="error-help">{{ errors.first('farm-name') }}</span>
    </div>

    <div class="mui-textfield">
      <gm-autocomplete></gm-autocomplete>
      <label for="location">מיקום</label>
    </div>

    <div class="mui-textfield" :class="{ 'error': errors.has('phone') }">
      <input type="tel" v-validate data-vv-rules="required|alpha_dash" id="phone" name="phone" placeholder="טלפון המשק">
      <label for="phone">טלפון</label>
      <span v-show="errors.has('phone')" class="error-help">{{ errors.first('phone') }}</span>
    </div>

    <div class="mui-textfield" :class="{ 'error': errors.has('email') }">
      <input type="email" v-validate data-vv-rules="email" id="email" name="email" placeholder="אימייל המשק">
      <label for="email">אימייל</label>
      <span v-show="errors.has('email')" class="error-help">{{ errors.first('email') }}</span>
    </div>

    <div class="mui-textfield">
      <input type="url" id="website" placeholder="אתר אינטרנט">
      <label for="website">אתר אינטרנט</label>
    </div>

    <div class="mui-textfield">
      <input type="url" id="facebook" placeholder="כתובת עמוד הפייסבוק">
      <label for="facebook">עמוד פייסבוק</label>
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
    <div class="mui-checkbox">
      <label>
      <input type="checkbox" value="">
      רכישה באינטרנט
      </label>
    </div>

    <div class="form-submit">
      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">הוספת משק</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import GMAutocomplete from './helpers/GMAutocomplete';
import heMessages from './helpers/heMessages.js';

Vue.use(VeeValidate, {
  locale: 'he',
  dictionary: {
    he: {
        messages: heMessages
    }
  }
});

export default {
  name: 'add-farm',
  components: { 'gm-autocomplete': GMAutocomplete },
}
</script>

<style lang="scss">
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

.error {
  // Override muicss
  input, input:focus {
    border-bottom-color: red;

    ~ label {
      color: red;
    }
  }
}
</style>
