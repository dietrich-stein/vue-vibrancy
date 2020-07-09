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
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html, body {
  margin: 0;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
