import Button from './button';
import Checkbox from './checkbox';
import Drawer from './drawer';
import Select from './select';
import Table from './table';
import Tabs from './tabs';
import Tree from './tree';

const components = [
    Button.button,
    Button.buttonGroup,
    Checkbox,
    Drawer,
    Select,
    Table,
    Tabs,
    Tree
];

const install = function(Vue, options) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    ...components
}