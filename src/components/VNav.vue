<template>
  <ul class="v-nav">
    <li>
        <h1>vue-vibrancy</h1>
    </li>
    <li>
      <v-link class="bold" href="/">Documentation</v-link>
    </li>
    <li class="separator"></li>
    <li>
      <v-link class="bold" href="/demo?id=0">Demo</v-link>
    </li>
    <li v-if="$root.currentRoute === '/demo'">
      <h5>Background</h5>
      <div>
        <button @click="onBackgroundButtonClicked($root.backgroundImagePencils)">Pencils</button>
        <button @click="onBackgroundButtonClicked($root.backgroundImagePier)">Pier</button>
      </div>
      <div>
        <button @click="onBackgroundButtonClicked($root.backgroundImageModern)">Modern</button>
        <button @click="onBackgroundButtonClicked($root.backgroundImageFoliage)">Foliage</button>
      </div>
    </li>
    <li v-if="$root.currentRoute === '/demo'">
      <h5>Blur Radius</h5>
      <input type="range" min="0" max="180" v-model.number="$root.rangeValue1"/><span class="range-label">{{ $root.rangeValue1 }}</span><br/>
      <input type="range" min="0" max="180" v-model.number="$root.rangeValue2"/><span class="range-label">{{ $root.rangeValue2 }}</span><br/>
      <input type="range" min="0" max="180" v-model.number="$root.rangeValue3"/><span class="range-label">{{ $root.rangeValue3 }}</span><br/>
    </li>
  </ul>
</template>

<script>
  import VLink from './VLink.vue'

  export default {
    name: 'VNav',
    components: {
      VLink
    },
    data: function () {
      return {
      }
    },
    methods: {
      onBackgroundButtonClicked(value) {
        this.$root.backgroundImageUrl = value
      }
    }
  }
</script>

<style>
  /* Reset only */
  ul.v-nav,
  ul.v-nav li {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: block;
  }

  .v-nav {
    padding: 1rem!important;
    background-color: white;
    flex-shrink: 0;
    align-items: stretch;
    border-right: 1px solid lightgray;
  }
  .v-nav li {
    line-height: 2rem;
    padding: 1rem;
  }
  .v-nav li.separator {
    height: 1px;
    border-top: 1px solid lightgray;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .bold {
    font-weight: bold;
  }
  .v-nav li.gray {
    color: #aaaaaa;
  }
  .v-nav li h1 {
    font-weight: 300;
    color: #304455;
    user-select: none;
  }
  .v-nav li h5 {
    margin: 0;
  }
  .v-nav li a {
    text-decoration: none;
  }
  .small {
    font-size: 0.8rem;
  }
  .footnote {
    font-size: 0.6rem;
    line-height: 0.7rem !important;
  }

  select {
    padding: 0.2rem;
  }
  button {
    margin-right: 0.5rem;
  }
  .range-label {
    width: 2rem;
    vertical-align: text-bottom;
    padding-left: .5rem;
  }
</style>
