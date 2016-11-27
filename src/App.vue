<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
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
}
</style>
