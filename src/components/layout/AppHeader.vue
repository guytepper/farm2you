<template>
  <header class="header container">
    <div class="header__right-section">
      <h1 class="site-title">
        <router-link to="/">ישר מהשדה</router-link>
      </h1>
    </div>

    <div class="header__left-section">
      <div v-if="this.$store.state.User.info">
        <router-link to="/admin/add-farm/" class="header__link">הוספת משק</router-link>
        <a href="#"  @click="signOut" class="header__link">התנתקות</a>
      </div>
      <div v-else>
        <router-link to="/add-farm/" class="header__link">+ הוספת משק</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Auth from '../../helpers/Auth'

export default {
  name: 'app-header',
  methods: {
    signOut () {
      Auth.signOut();
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/theme.scss';
  @import '../../assets/scss/mixins.scss';

  .header {
    display: flex;
    height: 55px;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    background-color: $primary-color;

    @include respond-at(1024px) {
      height: 65px;
    };

    a {
      &:hover {
        border-bottom: none;
      }
    }
  }

  .site-title {
    margin: 0; // Override muicss

    a {
      margin: 0;
      font-size: 26px;
      font-weight: 600;
      color: $primary-color-text;
      text-decoration: none;

      @include respond-at(1024px) {
        font-size: 34px;
      };
    }
  }

  .header__link {
    display: block;
    color: #fff;
    text-decoration: none;
  }
</style>
