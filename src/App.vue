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
@import './assets/scss/resets.scss';
@import './assets/scss/helpers.scss';
@import './assets/scss/general.scss';


body {
  background-color: #ECEBEB;
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

.panel {
  margin-bottom: 15px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12);

  @include respond-at(600px) {
    max-width: 600px;
    margin: 0 auto 15px;
  };
}
</style>
