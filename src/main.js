import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vsm from '@/index'
Vue.use(vsm)

import Highlight from './assets/js/highlight';
Vue.use(Highlight);

import util from './assets/js/util';
Vue.prototype.$util = util;

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
