import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";
import ScrollLoader from 'vue-scroll-loader';
import vueAwesomeCountdown from 'vue-awesome-countdown';

Vue.config.productionTip = false

Vue.use(vueAwesomeCountdown, 'vac')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/assets/img/loading.gif'),
  attempt: 1
})

Vue.use(ScrollLoader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
