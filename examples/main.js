import Vue from 'vue'
import App from './App.vue'
import router from './router'

import visam from '@visam';
Vue.use( visam );

import highlight from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
Vue.use(highlight);

import mixin from './mixin/mixin';
Vue.mixin(mixin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
