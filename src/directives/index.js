import vsmTip from './tip';
import vsmDrag from './drag';

const directives = [
  vsmTip,
  vsmDrag
]

const install = function(Vue, options) {
  directives.map( dir => {
    Vue.directive(dir.name, dir);
  })
}

export default {
  ...directives,
  install
}