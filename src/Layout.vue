<template>
  <div class="container">
    <v-nav></v-nav>
    <slot></slot>
  </div>
</template>

<script>
  import VNav from './components/VNav.vue'

  export default {
    name: 'Layout',
    components: {
      VNav
    },
    created () {
      this.$root.backgroundImageUrl = this.$root.backgroundImagePencils
    }
  }
</script>

<style>
  @import url('http://fonts.googleapis.com/css?family=Open+Sans:300,400');

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
    height: 100%;
    display: flex;
    background-color: darkgray;
  }
</style>
