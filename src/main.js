import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import vsm from '@/index'
Vue.use(vsm)

import Highlight from './assets/js/highlight';
Vue.use(Highlight);

import util from './assets/js/util';
Vue.prototype.$util = util;
Vue.prototype.$bus = new Vue();

import mixin from './mixin/mixin';
Vue.mixin(mixin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
