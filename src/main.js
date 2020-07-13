import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: (h) => {
    return h(App)
  },
}).$mount('#app')
