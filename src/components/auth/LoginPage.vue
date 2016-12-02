<template>
  <div class="panel login-page">
    <form class="login-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input id="username" name="username" type="text">
        <label for="username">שם משתמש</label>
      </div>

      <div class="mui-textfield mui-textfield--float-label">
        <input id="password" name="password" type="password">
        <label for="password">סיסמא</label>
      </div>

      <div class="form-submit">
        <button type="submit" class="mui-btn mui-btn--dark mui-btn--raised">התחברות</button>
      </div>
    </form>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../../assets/vendor/mui/textfield";
@import "../../assets/vendor/mui/button";

.login-form {
  width: 50%;
  margin: 0 auto;
}
</style>
