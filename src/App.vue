<template>
  <div id="app">
    <app-header></app-header>
    <my-map></my-map>

    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader'
import MyMap from './components/Map'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    AppHeader, MyMap
  },
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
}

.container {
    padding: 0 20px;
}
</style>
