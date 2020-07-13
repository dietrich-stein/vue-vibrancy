<template>
  <div id="app" class="container">
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import VNav from './components/VNav.vue'

  export default {
    name: 'App',
    components: {
      VNav
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    height: 100%;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
  button {
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
  .container {
    display: flex;
    background-color: darkgray;
  }
</style>
