<template>
  <div class="panel login-page">
    <form class="login-form" @submit.prevent="signIn">
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
import auth from '../../../helpers/Auth';

export default {
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signIn () {
      auth.signIn(this.username, this.password);
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/vendor/mui/textfield";
@import "../../../assets/vendor/mui/button";
@import "../../../assets/scss/helpers";

.login-form {
  width: 50%;
  margin: 0 auto;
}
</style>
