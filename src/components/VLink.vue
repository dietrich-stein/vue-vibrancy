<template>
  <a
    ref="a"
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
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
        let a = document.createElement('a')
        a.href = this.href
        return a.pathname === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.$el.pathname
        this.$root.currentRouteParams = this.$el.search.slice(1)
        window.history.pushState(null, '', this.href)
      }
    }
  }
</script>

<style>
  .active {
    color: #42b983;
  }
</style>
