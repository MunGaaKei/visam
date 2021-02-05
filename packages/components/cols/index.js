import Cols from './cols.vue';
import N from './n.vue';

Cols.install = Vue => Vue.component(Cols.name, Cols);
N.install = Vue => Vue.component(N.name, N);

export {
    Cols,
    N
};