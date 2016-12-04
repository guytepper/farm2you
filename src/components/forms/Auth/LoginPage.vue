<template>
  <div class="panel login-page">
    <form class="login-form" @submit.prevent="signIn">
      <div class="mui-textfield mui-textfield--float-label">
        <input v-model="username" id="username" name="username" type="text">
        <label for="username">שם משתמש</label>
      </div>

      <div class="mui-textfield mui-textfield--float-label">
        <input v-model="password" id="password" name="password" type="password">
        <label for="password">סיסמא</label>
      </div>

      <div class="form-submit">
        <button type="submit" class="mui-btn mui-btn--dark mui-btn--raised">התחברות</button>
      </div>
    </form>
  </div>

</template>

<script>
import auth from '../../../helpers/Auth'
export default {
  data () {
    return {
      username: "",
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

.login-form {
  width: 50%;
  margin: 0 auto;
}
</style>
