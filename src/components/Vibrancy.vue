<template>
  <div class="vibrancy">
    <canvas class="vibrancy-canvas" ref="canvas" />
    <div class="vibrancy-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { stackBlur } from '../stackBlur'
export default {
  name: 'Vibrancy',
  props: {
    vibrance: Number,
    brightness: Number,
    blur: Number
  },
  data: function () {
    return {
      img: null,
      isImageLoaded: false,
      scrollY: 0
    }
  },
  watch: {
    isImageLoaded: function (newVal, oldVal) {
      if (newVal === true && oldVal === false) {
        this.img.width = this.img.naturalWidth
        this.img.height = this.img.naturalHeight
        this.updateCanvas()
      }
    }
  },
  methods: {
    findParentWithImage: function (el) {
      while (typeof(el) === 'object' && el !== null) {
        let url = this.getImageUrl(el)
        if (typeof(url) === 'string' && url.length > 0) {
          return el
        }
        el = el.parentElement
      }
    },
    getImageUrl: function(el) {
      let elStyles = getComputedStyle(el)
      let url = elStyles.backgroundImage.slice(4, -1).replace(/"/g, '')
      return (url && url.length > 0) ? url : null
    },
    loadImage: function(url) {
      this.isImageNeeded = true
      this.img = new Image()
      this.img.crossOrigin = 'Anonymous'
      let vm = this
      this.img.onload = function() {
        vm.isImageLoaded = true
      }
      this.img.src = url
    },
    updateCanvas: function () {
      // Calculate our actual component dimensions
      var rect = this.$el.getBoundingClientRect()
      let elWidth = Math.round(rect.right - rect.left)
      let elHeight = Math.round(rect.bottom - rect.top)

      // Set the canvas dimensions to match the component
      this.$refs.canvas.width = elWidth
      this.$refs.canvas.height = elHeight

      let ctx = this.$refs.canvas.getContext('2d')
      ctx.drawImage(
        this.img,
        this.$el.offsetLeft,               // The x coordinate where to start clipping
        this.$el.offsetTop - this.scrollY, // The y coordinate where to start clipping
        elWidth,                           // The width of the clipped image
        elHeight,                          // The height of the clipped image
        0,                                 // The x coordinate where to place the image on the canvas
        0,                                 // The y coordinate where to place the image on the canvas
        elWidth,                           // The width of the image to use (stretch or reduce the image)
        elHeight                           // The height of the image to use (stretch or reduce the image)
      )

      stackBlur(this.$refs.canvas, 0, 0, elWidth, elHeight, 90);
    }
  },
	created() {
		window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      if (this.isImageLoaded) {
        this.updateCanvas()
      }
		})
	},
  mounted: function (){
    let parent = this.findParentWithImage(this.$el)
    if (parent) {
      let parentImageUrl = this.getImageUrl(parent)
      this.loadImage(parentImageUrl)
    }
  }
}
</script>

<style>
.vibrancy {
  box-sizing:border-box;
  /*background-color: blue;*/
  position: relative;
  padding: 0px;
  /*display: flex;
  flex-flow: row nowrap;
  align-items: stretch;*/
  height: 100%;
  width: 100%;
}
.vibrancy-canvas {
  box-sizing:border-box;
  /*background-color: red;*/
  opacity: 1;
  position: absolute;
  object-position: 0 0;
}
.vibrancy-content {
  box-sizing:border-box;
  position: relative;
  /*background-color: green;*/
  opacity: 1;
  width: 100%;
}
</style>
