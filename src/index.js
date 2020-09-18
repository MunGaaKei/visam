import Vue from 'vue';

import * as components from './packages';
import * as directives from './directives';
import './packages/visam';

Vue.use( components.default );
Vue.use( directives.default );