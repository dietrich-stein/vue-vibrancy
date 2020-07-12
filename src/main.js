import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: getCurrentRoute(),
    currentRouteParams: getCurrentRouteParams(),
    docReadMe: require('../README.md'),
    docLicense: require('../LICENSE.md'),
    backgroundImagePreview: require('./assets/vibrancy-preview.png'),
    backgroundImagePencils: require('./assets/pencils.jpg'),
    backgroundImagePier: require('./assets/pier.jpg'),
    backgroundImageModern: require('./assets/modern.jpg'),
    backgroundImageFoliage: require('./assets/foliage.jpg'),
    backgroundImageUrl: '',
    blurValue1: 90,
    blurValue2: 135,
    blurValue3: 180,
    noiseValue1: 0,
    noiseValue2: 0,
    noiseValue3: 0,
    filterValue1: 'saturate(200%) brightness(150%)',
    filterValue2: 'saturate(200%) brightness(150%)',
    filterValue3: 'saturate(200%) brightness(150%)'
  },
  watch: {
    currentRoute() {
      this.$nextTick().then(() => {
        this.$forceUpdate()
      })
    },
    currentRouteParams() {
      this.$nextTick().then(() => {
        this.$forceUpdate()
      })
    },
    backgroundImageUrl() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].onBackgroundImageChanged()
        })
      }
    },
    blurValue1() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v1.updateCanvas()
        })
      }
    },
    blurValue2() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v2.updateCanvas()
        })
      }
    },
    blurValue3() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v3.updateCanvas()
        })
      }
    },
    noiseValue1() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v1.updateCanvas()
        })
      }
    },
    noiseValue2() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v2.updateCanvas()
        })
      }
    },
    noiseValue3() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v3.updateCanvas()
        })
      }
    },
    filterValue1() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v1.updateCanvas()
        })
      }
    },
    filterValue2() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v2.updateCanvas()
        })
      }
    },
    filterValue3() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v3.updateCanvas()
        })
      }
    }
  },
  render: (h) => {
    return h(getRouteComponent())
  },
})

function getRouteComponent() {
  let key = getCurrentRoute()
  return routes[key] || routes['404']
}

function getCurrentRoute() {
  return window.location.pathname
}

function getCurrentRouteParams() {
  return window.location.search.slice(1)
}

window.addEventListener('popstate', () => {
  app.currentRoute = getCurrentRoute()
  app.currentRouteParams = getCurrentRouteParams()
})
