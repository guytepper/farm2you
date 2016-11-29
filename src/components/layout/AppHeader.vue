<template>
  <header class="header container">
    <h1 class="site-title">
      <router-link to="/">ישר מהשדה</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
  @import '../../assets/scss/theme.scss';
  @import '../../assets/scss/mixins.scss';

  .header {
    display: flex;
    height: 55px;
    align-items: center;
    background-color: $primary-color;
  }

  .site-title a {
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    color: $primary-color-text;
    text-decoration: none;
  }
</style>
