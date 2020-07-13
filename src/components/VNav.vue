<template>
  <ul class="v-nav">
    <li>
        <h1>vue-vibrancy</h1>
    </li>
    <li>
      <router-link to="/" class="bold">Documentation</router-link>
    </li>
    <li>
      <router-link to="/demo" class="bold">Demo</router-link>
    </li>
    <li class="separator"></li>
    <li v-if="$route.name === 'demo'">
      <h5>Background Image</h5>
      <div>
        <button @click="onBackgroundButtonClicked('backgroundImagePencils')">Pencils</button>
        <button @click="onBackgroundButtonClicked('backgroundImagePier')">Pier</button>
      </div>
      <div>
        <button @click="onBackgroundButtonClicked('backgroundImageModern')">Modern</button>
        <button @click="onBackgroundButtonClicked('backgroundImageFoliage')">Foliage</button>
      </div>
    </li>
    <li v-if="$route.name === 'demo'">
      <h5>Blur Radius</h5>
      <input type="range" min="0" max="180" name="blurValue1" v-model.number="b1" @input="onUpdateBlur"/><span class="range-label">{{ b1 }}</span><br/>
      <input type="range" min="0" max="180" name="blurValue2" v-model.number="b2" @input="onUpdateBlur"/><span class="range-label">{{ b2 }}</span><br/>
      <input type="range" min="0" max="180" name="blurValue3" v-model.number="b3" @input="onUpdateBlur"/><span class="range-label">{{ b3 }}</span>
    </li>
    <li v-if="$route.name === 'demo'">
      <h5>Canvas Filter</h5>
      <input type="text" name="filterValue1" v-model.number="f1" @input="onUpdateFilter"/><br/>
      <input type="text" name="filterValue2" v-model.number="f2" @input="onUpdateFilter"/><br/>
      <input type="text" name="filterValue3" v-model.number="f3" @input="onUpdateFilter"/><br/>
    </li>
    <li v-if="$route.name === 'demo'">
      <h5>Noise</h5>
      <input type="range" min="0" max="30" name="noiseValue1" v-model.number="n1" @input="onUpdateNoise"/><span class="range-label">{{ n1 / 100 }}</span><br/>
      <input type="range" min="0" max="30" name="noiseValue2" v-model.number="n2" @input="onUpdateNoise"/><span class="range-label">{{ n2 / 100 }}</span><br/>
      <input type="range" min="0" max="30" name="noiseValue3" v-model.number="n3" @input="onUpdateNoise"/><span class="range-label">{{ n3 / 100 }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'VNav',
    data() {
      return {
        b1: 90,
        b2: 135,
        b3: 180,
        f1: 'saturate(200%) brightness(150%)',
        f2: 'saturate(200%) brightness(150%)',
        f3: 'saturate(200%) brightness(150%)',
        n1: 0,
        n2: 0,
        n3: 0
      }
    },
    methods: {
      onBackgroundButtonClicked(value) {
        this.$root.$emit('background', value)
      },
      onUpdateBlur(event) {
        this.$root.$emit('update', {
          name: event.target.name,
          value: parseInt(event.target.value)
        })
      },
      onUpdateFilter(event) {
        this.$root.$emit('update', {
          name: event.target.name,
          value: event.target.value
        })
      },
      onUpdateNoise(event) {
        this.$root.$emit('update', {
          name: event.target.name,
          value: parseInt(event.target.value) / 100
        })
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
