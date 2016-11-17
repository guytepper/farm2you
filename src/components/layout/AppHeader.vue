<template>
  <header class="header container">
    <h1 class="site-title">ישר מהשדה</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
  @import '../../assets/scss/theme.scss';

  .header {
    width: 100%;
    height: 45px;
    background-color: $primary-color;
  }

  .site-title {
    margin: 0;
    color: $primary-color-text;
  }
</style>
