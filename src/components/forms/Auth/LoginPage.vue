<template>
  <div class="panel login-page">
      <div class="login-form__message" v-if="message">
        <p>
          {{ message }}
        </p>
      </div>

      <div class="login-form__providers">
        <button @click.prevent="facebookLogin()" class="frm-btn frm-btn--blue">
          <img src="../../../assets/icons/facebook.svg" alt="">
          התחברות דרך פייסבוק
        </button>
      </div>
  </div>

</template>

<script>
import Auth from '../../../helpers/Auth';
import store from '../../../store';
import messages from '../strings/loginMessages';

export default {
  data () {
    return {
      message: "",
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
    // Continues the login process
    signInSuccessful () {
      // If the user intended to add farm, redirect there
      if (this.$router.currentRoute.hash === '#add-farm') {
        this.$router.push('/add-farm/')
      }
      else {
        this.$router.push('/')
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // Redirect user to homepage
    if (store.state.User.info != null) {
      next('/');
    }

    // Display auth error message related to the location the user tried to access
    if (to.hash === '#add-farm') {
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
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
