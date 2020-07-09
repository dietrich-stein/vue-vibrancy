<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'

  export default {
    name: 'VLink',
    props: {
      href: {
        type:String,
        required: true
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        let route = routes[this.href]
        window.history.pushState(
          null,
          route,
          this.href
        )
      }
    }
  }
</script>

<style>
  .active {
    color: cornflowerblue;
  }
</style>