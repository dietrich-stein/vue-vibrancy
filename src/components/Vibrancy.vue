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
    filter: String,
    radius: String
  },
  data: function () {
    return {
      img: null,
      elParent: null,
      isImageLoaded: false
    }
  },
  watch: {
    isImageLoaded: function (newVal, oldVal) {
      if (newVal === true && oldVal === false) {
        this.img.width = this.img.naturalWidth
        this.img.height = this.img.naturalHeight
        this.updateCanvas()
      }
    },
    isMouseOver: function () {
      this.updateCanvas()
    }
  },
  methods: {
    findParentWithImage: function (el) {
      while (typeof(el) === 'object' && el !== null) {
        let url = this.getImageUrl(el)
        if (url.length > 0) {
          return el
        }
        el = el.parentElement
      }

      return null
    },
    getImageUrl: function (el) {
      let url = ''
      if (el !== null) {
        let elStyles = getComputedStyle(el)
        url = elStyles.backgroundImage.slice(4, -1).replace(/"/g, '')
      }
      return url
    },
    getBackgroundSize: function (el) {
      let size = ''
      if (el !== null) {
        let elStyles = getComputedStyle(el)
        size = elStyles.backgroundSize
      }
      return size
    },
    loadImage: function() {
      this.isImageLoaded = false

      this.img = new Image()
      this.img.crossOrigin = 'Anonymous'

      let vm = this
      this.img.onload = function() {
        vm.isImageLoaded = true
      }

      this.img.src = this.getImageUrl(this.elParent)
    },
    updateCanvas: function () {
      var rect = this.$el.getBoundingClientRect()
      let elWidth = Math.round(rect.right - rect.left)
      let elHeight = Math.round(rect.bottom - rect.top)

      if (this.$refs.canvas.width !== elWidth) {
        this.$refs.canvas.width = elWidth
      }
      if (this.$refs.canvas.height !== elHeight) {
        this.$refs.canvas.height = elHeight
      }

      let ctx = this.$refs.canvas.getContext('2d')
      let source = this.img
      let parentRect = this.elParent.getBoundingClientRect()

      /*
      // This is somewhat working but not quite correct
      let bgSize = this.getBackgroundSize(this.elParent) // auto is default
      // For a "cover" parent we need to stretch the image first before we can use it as the source
      if (bgSize === 'cover') {
        let elParentWidth = Math.round(parentRect.right - parentRect.left)
        let elParentHeight = Math.round(parentRect.bottom - parentRect.top)

        let stretchCanvas = document.createElement('canvas')
        stretchCanvas.width = elParentWidth
        stretchCanvas.height = elParentHeight
        let stretchCtx = stretchCanvas.getContext('2d')
        stretchCtx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, elParentWidth, elParentHeight)

        source = stretchCanvas
      }*/

      if (this.filter && this.filter.length > 0) {
        ctx.filter = this.filter
      }

      let clipLeft = Math.round(rect.left - parentRect.left)
      let clipTop = Math.round(rect.top - parentRect.top) // - this.scrollY

      ctx.drawImage(
        source,
        clipLeft, clipTop,
        elWidth, elHeight,
        0, 0,
        elWidth, elHeight
      )

      let blurRadius = (
        typeof(this.radius) === 'string' &&
        this.radius.length > 0 &&
        parseFloat(this.radius) >= 0 &&
        parseFloat(this.radius) <= 180
      ) ? parseFloat(this.radius) : 90

      console.log(blurRadius)

      stackBlur(ctx, 0, 0, elWidth, elHeight, blurRadius)
    }
  },
	created() {
    /*
    // Works, needs debounce, but disabled for further debugging in the future
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      if (this.isImageLoaded) {
        this.updateCanvas()
      }
    })
    */
    /*
    // Works, needs debounce, but disabled for further debugging in the future
    window.addEventListener('resize', () => {
      if (this.isImageLoaded) {
        this.updateCanvas()
      }
    })
    */
	},
  mounted: function (){
    this.elParent = this.findParentWithImage(this.$el)
    if (typeof(this.elParent) === 'object' && this.elParent !== null) {
      this.loadImage()
    }
  }
}
</script>

<style>
.vibrancy {
  position: relative;
  padding: 0px;
  overflow: hidden;
}
.vibrancy-canvas {
  position: absolute;
}
.vibrancy-content {
  position: relative;
  width: 100%;
}
</style>
