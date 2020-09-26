import Button from './button';
import Checkbox from './checkbox';
import Drawer from './drawer';
import Form from './form';
import Group from './group';
import Input from './input';
import Select from './select';
import Table from './table';
import Tabs from './tabs';
import Tree from './tree';

const components = [
    Button,
    Checkbox,
    Drawer,
    Form,
    Group,
    Input,
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