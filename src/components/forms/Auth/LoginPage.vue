<template>
  <div class="panel login-page">
    <form>
      <div class="mui-textfield">
        <input id="email" type="email" v-model="email">
        <label for="email">אימייל</label>
      </div>
      <div class="mui-textfield">
        <input id="password" type="password" v-model="password">
        <label for="password">סיסמה</label>
      </div>

      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">התחברות</button>
    </form>
  </div>

</template>

<script>
import Auth from '../../../helpers/Auth';
import store from '../../../store';
import messages from '../strings/loginMessages';

export default {
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    // Logs the user using facebook
    facebookLogin () {
      Auth.facebookLogin().then(user => {
        // Check if the user doesn't exist yet
        this.signInSuccessful();
      }).catch(err => console.log(err));
    },
  },
}
</script>

<style lang="scss">
@import "../../../assets/vendor/mui/textfield";
@import "../../../assets/vendor/mui/button";
@import "../../../assets/scss/helpers";
@import "../../../assets/scss/buttons";

.login-form {
  width: 50%;
  margin: 0 auto;
}

.login-form__message {
  font-weight: bold;
  text-align: center;
}

.login-form__providers {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
