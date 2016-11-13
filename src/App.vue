<template>
  <div id="app">
    <img src="./assets/logo.png">

    <my-map></my-map>
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
  created: function() {
    axios.get('/api/farm').then(res => {
      console.log(res);
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
