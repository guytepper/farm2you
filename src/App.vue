<template>
  <div id="app">
    <app-header></app-header>
    <div class="content container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
}
</script>

<style lang="scss">
@import './assets/scss/mixins.scss';

html {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Assistant', Helvetica, Arial, sans-serif;
  margin: 0;
}

.container {
  padding: 0 20px;

  @include respond-at(1024px) {
    padding: 0 40px;
  };
}

.content {
  max-width: 50%;
  // margin: 0 auto;
}
</style>
