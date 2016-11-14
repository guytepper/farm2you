<template>
  <div id="app">
    <img src="./assets/logo.png">

    <my-map></my-map>

    <div class="farm-cards">
      <farm-card v-for="farm in farms" :farm="farm"></farm-card>
    </div>
  </div>
</template>

<script>
import MyMap from './components/Map'
import FarmCard from './components/FarmCard'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    MyMap, FarmCard
  },
  data: function() {
    return {
      farms: [{
        name: 'משק בן יהודה'
      }, {
        name: 'הגינה הארגנית'
      }]
    }
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
