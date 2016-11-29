import Vue from 'vue';
import VeeValidate from 'vee-validate';
import GMAutocomplete from '../helpers/GMAutocomplete';
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
  components: { 'gm-autocomplete': GMAutocomplete },
}
