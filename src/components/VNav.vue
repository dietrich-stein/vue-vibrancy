<template>
  <ul class="v-nav">
    <li>
        <h1>vue-vibrancy</h1>
    </li>
    <li>
      <v-link class="bold" href="/">Documentation</v-link>
    </li>
    <li>
      <v-link class="bold" href="/demo?id=0">Demo</v-link>
    </li>
    <li class="separator"></li>
    <li v-if="$root.currentRoute === '/demo'">
      <h5>Background Image</h5>
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
      <input type="range" min="0" max="180" v-model.number="$root.blurValue1"/><span class="range-label">{{ $root.blurValue1 }}</span><br/>
      <input type="range" min="0" max="180" v-model.number="$root.blurValue2"/><span class="range-label">{{ $root.blurValue2 }}</span><br/>
      <input type="range" min="0" max="180" v-model.number="$root.blurValue3"/><span class="range-label">{{ $root.blurValue3 }}</span>
    </li>
    <li v-if="$root.currentRoute === '/demo'">
      <h5>Canvas Filter</h5>
      <input type="text" v-model.number="$root.filterValue1"/><br/>
      <input type="text" v-model.number="$root.filterValue2"/><br/>
      <input type="text" v-model.number="$root.filterValue3"/><br/>
    </li>
    <li v-if="$root.currentRoute === '/demo'">
      <h5>Noise</h5>
      <input type="range" min="0" max="30" v-model.number="$root.noiseValue1"/><span class="range-label">{{ $root.noiseValue1 / 100 }}</span><br/>
      <input type="range" min="0" max="30" v-model.number="$root.noiseValue2"/><span class="range-label">{{ $root.noiseValue2 / 100 }}</span><br/>
      <input type="range" min="0" max="30" v-model.number="$root.noiseValue3"/><span class="range-label">{{ $root.noiseValue3 / 100 }}</span>
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
    margin: 1rem 0 0 0;
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
    margin: 0.5rem 0.5rem 0 0;
  }
  input[type=text] {
    border: 1px solid #ddd;
    font-size: 0.6rem;
    width: 100%;
    padding: 0.5rem;
  }
  .range-label {
    width: 2rem;
    vertical-align: text-bottom;
    padding-left: .5rem;
  }
</style>
