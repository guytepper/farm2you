<template>
  <div id="app">
    <img src="./assets/logo.png">
      <my-map></my-map>

      <div class="farm-cards">
        <farm-list :farms="farms"></farm-list>
      </div>

    <router-view>
    </router-view>
  </div>
</template>

<script>
import MyMap from './components/Map'
import FarmList from './components/FarmList'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    MyMap, FarmList
  },
  data: function() {
    return {
      farms: []
    }
  },
  created: function() {
    // Get farms from DB
    axios.get('/api/farm').then(res => {
      this.$data.farms = res.data;
      console.log(this.$data.farms);
    });
  }
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
