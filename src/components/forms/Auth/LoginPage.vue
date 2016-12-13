<template>
  <div class="panel login-page">
    <form class="login-form" @submit.prevent="signIn">
      <div class="login-form__message" v-if="message">
        <p>
          {{ message }}
        </p>
      </div>

      <div class="login-form__providers">
        <button @click="facebookLogin()" class="frm-btn frm-btn--blue">
          <img src="../../../assets/icons/facebook.svg" alt="">
          התחברות דרך פייסבוק
        </button>
      </div>

      <p>
        התחברות באמצעות אימיילֹ:
      </p>

      <div class="mui-textfield">
        <input
          v-model="email" id="email" name="email" type="email"
          placeholder="אימייל"
          class="ltr">
        <label for="email">אימייל</label>
      </div>

      <div class="mui-textfield">
        <input
          v-model="password" id="password" name="password" type="password"
          placeholder="סיסמא"
          class="ltr">
        <label for="password">סיסמא</label>
      </div>

      <div class="form-submit">
        <button type="submit" class="mui-btn mui-btn--primary mui-btn--raised">התחברות</button>
      </div>
    </form>
  </div>

</template>

<script>
import Auth from '../../../helpers/Auth';
import messages from '../strings/loginMessages';

export default {
  data () {
    return {
      message: "",
      email: "",
      password: ""
    }
  },
  methods: {
    signIn () {
      Auth.signIn(this.email, this.password);
    },
    facebookLogin () {
      Auth.facebookLogin()
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.hash === '#add-farm') {
      // Display auth error message related to the location the user tried to access
      next(vm => vm.$data.message = messages['add-farm'])
    }
    else next();
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
  margin-bottom: 10px;
}
</style>
