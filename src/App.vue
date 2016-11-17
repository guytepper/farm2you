<template>
  <div id="app">

    <my-map></my-map>

    <router-view></router-view>
  </div>
</template>

<script>
import MyMap from './components/Map'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    MyMap
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
