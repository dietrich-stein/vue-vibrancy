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
    rangeValue1: 90,
    rangeValue2: 135,
    rangeValue3: 180
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
    rangeValue1() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v1.updateCanvas()
        })
      }
    },
    rangeValue2() {
      if (this.currentRoute === '/demo') {
        this.$nextTick().then(() => {
          app.$children[0].$refs.v2.updateCanvas()
        })
      }
    },
    rangeValue3() {
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
