import vsmButton from '@/packages/button';
import vsmCheckbox from '@/packages/checkbox';
import vsmDrawer from '@/packages/drawer';
import vsmPane from '@/packages/pane';
import vsmTable from '@/packages/table';
import vsmTabs from '@/packages/tabs';
import vsmTree from '@/packages/tree';

const components = [
    vsmButton,
    vsmCheckbox,
    vsmDrawer,
    vsmPane,
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