import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: getCurrentRoute(),
    currentRouteParams: getCurrentRouteParams(),
    backgroundImageUrl: 'https://images.unsplash.com/photo-1591758692416-b47871e30eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    rangeValue1: '90',
    rangeValue2: '135',
    rangeValue3: '180'
  },
  watch: {
    currentRoute() {
      this.currentRouteParams = getCurrentRouteParams()
      this.$forceUpdate()
    },
    backgroundImageUrl() {
      this.currentRouteParams = getCurrentRouteParams()
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
})
