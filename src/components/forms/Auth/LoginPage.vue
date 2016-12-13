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
      message: "",
    }
  },
  methods: {
    facebookLogin () {
      Auth.facebookLogin().then(user => {
        this.signInSuccessful();
      });
    },
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
    if (store.state.User.info != null) {
      next('/');
    }
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
