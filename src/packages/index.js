import vsmButton from './button';
import vsmCheckbox from './checkbox';
import vsmDrawer from './drawer';
import vsmPane from './pane';
import vsmSelect from './select';
import vsmTable from './table';
import vsmTabs from './tabs';
import vsmTree from './tree';

const components = [
    vsmButton,
    vsmCheckbox,
    vsmDrawer,
    vsmPane,
    vsmSelect,
    vsmTable,
    vsmTabs,
    vsmTree
]

const install = function(Vue, options) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}

export default {
    install,
    ...components
}