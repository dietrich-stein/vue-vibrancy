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
      filter: {
        type: String,
        default: ''
      },
      radius: {
        type: Number,
        default: 90
      },
      modifyParent: {
        type: Boolean,
        default: true
      },
      noise: {
        type: Number,
        default: 0
      },
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
          if (this.modifyParent === true && typeof(this.elParent) === 'object' && this.elParent !== null) {
            this.elParent.style.width = this.img.width + 'px'
            this.elParent.style.height = this.img.height + 'px'
            this.elParent.style.position = 'relative'
          }
          this.updateCanvas()
        }
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
          typeof(this.radius) === 'number' &&
          parseFloat(this.radius) >= 0 &&
          parseFloat(this.radius) <= 180
        ) ? parseFloat(this.radius) : 90
        if (blurRadius > 0) {
          stackBlur(ctx, 0, 0, elWidth, elHeight, blurRadius)
        }

        let noiseValue = (
          typeof(this.noise) === 'number' &&
          parseFloat(this.noise) >= 0 &&
          parseFloat(this.noise) <= 1
        ) ? parseFloat(this.noise) : 0
        if (noiseValue > 0) {
          let imageData = ctx.getImageData(0, 0, elWidth, elHeight)

          let i, r, g, b, color, il = imageData.data.length
          for (i = 0; i < il; i += 4) {
            color = Math.random() * 255

            r = imageData.data[i + 0] * color / 255
            g = imageData.data[i + 1] * color / 255
            b = imageData.data[i + 2] * color / 255

            imageData.data[i + 0] = r * noiseValue + imageData.data[i + 0] * (1 - noiseValue)
            imageData.data[i + 1] = g * noiseValue + imageData.data[i + 1] * (1 - noiseValue)
            imageData.data[i + 2] = b * noiseValue + imageData.data[i + 2] * (1 - noiseValue)
          }
          ctx.putImageData(imageData, 0, 0)
        }
      }
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
