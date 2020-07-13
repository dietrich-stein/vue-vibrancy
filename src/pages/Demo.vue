
<template>
  <div class="demo-container" :style="'background-image: url(' + backgroundUrl + ')'">
    <vibrancy
      id="v01"
      ref="v1"
      :radius="blurValue1"
      :modify-parent="true"
      :filter="filterValue1"
      :noise="noiseValue1"
    >
      <template v-slot:content>
        <p>What are you waiting for?</p>
      </template>
    </vibrancy>
    <vibrancy
      id="v02"
      ref="v2"
      :radius="blurValue2"
      :modify-parent="true"
      :filter="filterValue2"
      :noise="noiseValue2"
    >
      <template v-slot:content>
        <p>The perfect design is now within your grasp.</p>
      </template>
    </vibrancy>
    <vibrancy
      id="v03"
      ref="v3"
      :radius="blurValue3"
      :modify-parent="true"
      :filter="filterValue3"
      :noise="noiseValue3"
    >
      <template v-slot:content>
        <p>Push the limit or get out of the way.</p>
      </template>
    </vibrancy>
  </div>
</template>

<script>
  import Vibrancy from '../components/Vibrancy.vue'

  export default {
    name: 'Demo',
    components: {
      Vibrancy
    },
    data: function () {
      return {
        backgroundImagePreview: require('../assets/vibrancy-preview.png'),
        backgroundImagePencils: require('../assets/pencils.jpg'),
        backgroundImagePier: require('../assets/pier.jpg'),
        backgroundImageModern: require('../assets/modern.jpg'),
        backgroundImageFoliage: require('../assets/foliage.jpg'),
        backgroundUrl: '',
        blurValue1: 90,
        blurValue2: 135,
        blurValue3: 180,
        noiseValue1: 0,
        noiseValue2: 0,
        noiseValue3: 0,
        filterValue1: 'saturate(200%) brightness(150%)',
        filterValue2: 'saturate(200%) brightness(150%)',
        filterValue3: 'saturate(200%) brightness(150%)'
      }
    },
    watch: {
      backgroundUrl() {
        this.$nextTick().then(() => {
          this.onBackgroundImageChanged()
        })
      },
      blurValue1() {
        this.$nextTick().then(() => {
          this.$refs.v1.updateCanvas()
        })
      },
      blurValue2() {
        this.$nextTick().then(() => {
          this.$refs.v2.updateCanvas()
        })
      },
      blurValue3() {
        this.$nextTick().then(() => {
          this.$refs.v3.updateCanvas()
        })
      },
      noiseValue1() {
        this.$nextTick().then(() => {
          this.$refs.v1.updateCanvas()
        })
      },
      noiseValue2() {
        this.$nextTick().then(() => {
          this.$refs.v2.updateCanvas()
        })
      },
      noiseValue3() {
        console.log('n3')
        this.$nextTick().then(() => {
          this.$refs.v3.updateCanvas()
        })
      },
      filterValue1() {
        this.$nextTick().then(() => {
          this.$refs.v1.updateCanvas()
        })
      },
      filterValue2() {
        this.$nextTick().then(() => {
          this.$refs.v2.updateCanvas()
        })
      },
      filterValue3() {
        this.$nextTick().then(() => {
          this.$refs.v3.updateCanvas()
        })
      }
    },
    methods: {
      onBackgroundImageChanged() {
        this.$refs.v1.loadImage()
        this.$refs.v2.loadImage()
        this.$refs.v3.loadImage()
      }
    },
    created () {
      this.backgroundUrl = this.backgroundImagePencils
    },
    mounted () {
      this.$root.$on('background', data => {
        this.backgroundUrl = this[data]
      });

      this.$root.$on('update', data => {
        this[data.name] = data.value
      });
    }
  }
</script>

<style>
  .demo-container {
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  /* Top */
  #v01 {
    width: 100%;
    height: 100px;
    top: 0;
    position: absolute;
  }
  #v01 p {
    text-align: center;
    padding: 0;
    font-size: 2rem;
    font-weight: 300;
    color: black;
  }

  /* Middle */
  #v02 {
    width: 500px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  #v02 p {
    text-align: center;
    padding: 0px;
    font-size: 2rem;
    font-weight: 300;
    color: black;
  }

  /* Bottom */
  #v03 {
    width: 100%;
    height: 100px;
    bottom: 0;
    position: absolute;
  }
  #v03 p {
    text-align: center;
    padding: 0;
    font-size: 2rem;
    font-weight: 300;
    color: black;
  }
</style>
