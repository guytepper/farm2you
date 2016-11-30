import Vue from 'vue';
import VeeValidate from 'vee-validate';
import initGMAutoComplete from '../helpers/GMAutocomplete.js';
import heMessages from '../strings/heMessages.js';
import heAttributes from '../strings/heAttributes.js';

Vue.use(VeeValidate, {
  locale: 'he',
  dictionary: {
    he: {
        messages: heMessages,
        attributes: heAttributes
    }
  }
});

export default {
  name: 'add-farm',
  created () {
    initGMAutoComplete(this)
  },
  methods: {
    validateBeforeSubmit(e) {
      this.$validator.validateAll();

      if (this.errors.any()) {
          e.preventDefault();
      }
    },
  }
}
