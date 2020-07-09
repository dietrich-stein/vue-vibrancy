
<template>
  <layout>
    <div class="demo-container" :class="demoClass" :style="'background-image: url(' + $root.backgroundImageUrl + ')'">
      <vibrancy id="v01" ref="v1" :radius="$root.rangeValue1">
        <template v-slot:content>
          <p>What are you waiting for?</p>
        </template>
      </vibrancy>
      <vibrancy id="v02" ref="v2" :radius="$root.rangeValue2" :filter="'saturate(200%) brightness(150%)'">
        <template v-slot:content>
          <p>The perfect design is now within your grasp.</p>
        </template>
      </vibrancy>
      <vibrancy id="v03" ref="v3" :radius="$root.rangeValue3">
        <template v-slot:content>
          <p>Push the limit or get out of the way.</p>
        </template>
      </vibrancy>
    </div>
  </layout>
</template>

<script>
  import Layout from '../Layout.vue'
  import Vibrancy from '../components/Vibrancy.vue'

  export default {
    name: 'Demo',
    components: {
      Layout,
      Vibrancy
    },
    data: function () {
      return {
        demoId: 0
      }
    },
    computed: {
      demoClass () {
        return 'demo-' + this.getDemoId()
      }
    },
    methods: {
      onBackgroundImageChanged() {
        this.$refs.v1.loadImage()
        this.$refs.v2.loadImage()
        this.$refs.v3.loadImage()
      },
      getDemoId () {
        let params = this.$root.currentRouteParams
        if (params.length > 3 && params.substr(0, 3) === 'id=') {
          params = params.slice(3)
          this.demoId = parseInt(params)
        }

        return this.demoId
      }
    }
  }
</script>

<style>
.demo-container {
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.demo-container.demo-1 {
  background-size: cover;
}
.demo-container.demo-2 {
  background-repeat: repeat;
}

/* Top Header */
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
  color: black;
}

/* Centered */
#v02 {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
#v02 p {
  text-align: center;
  padding: 30px;
  font-size: 2rem;
  color: black;
}

/* Bottom Footer */
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
  color: black;
}


</style>