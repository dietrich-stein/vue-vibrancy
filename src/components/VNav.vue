<template>
  <ul class="v-nav">
    <li>
        <h1>vue-vibrancy</h1>
    </li>
    <li class="bold">
      <v-link href="/">Documentation</v-link>
    </li>
    <li class="separator"></li>
    <li class="bold gray">
      Working Demos
    </li>
    <li>
      <v-link href="/demo?id=0">Basic</v-link>
    </li>
    <li class="separator"></li>
    <li class="bold gray">
      Future Work
    </li>
    <li>
      <v-link href="/demo?id=1">backgroundSize: cover</v-link>
    </li>
    <li>
      <v-link href="/demo?id=2">backgroundRepeat: repeat</v-link>
    </li>
    <li class="separator"></li>
    <li class="bold gray">
      Options
    </li>
    <li>
      <button id="random-background" @click="onRandomButtonClicked">New Random Background</button>
    </li>
    <li>
      Blur Radius<br />
      <input type="range" min="0" max="180" v-model="$root.rangeValue1"/><span class="range-label">{{ $root.rangeValue1 }}</span><br/>
      <input type="range" min="0" max="180" v-model="$root.rangeValue2"/><span class="range-label">{{ $root.rangeValue2 }}</span><br/>
      <input type="range" min="0" max="180" v-model="$root.rangeValue3"/><span class="range-label">{{ $root.rangeValue3 }}</span><br/>
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
    onRandomButtonClicked() {
      let now = new Date();
      this.$root.backgroundImageUrl = 'https://source.unsplash.com/random#' + now.getTime()
    }
  }
}
</script>

<style>
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
.v-nav li.bold {
  font-weight: bold;
}
.v-nav li.gray {
  color: gray
}
.v-nav li a {
  text-decoration: none;
}
select {
  padding: 0.2rem;
}
.range-label {
  width: 2rem;
}
</style>
