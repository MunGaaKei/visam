import Button from './button';
import checkbox from './checkbox';
import Checkbox from './checkbox';
import Dialog from './dialog';
import Drawer from './drawer';
import Form from './form';
import Group from './group';
import Icon from './icon';
import Input from './input';
import Radio from './radio';
import Select from './select';
import Table from './table';
import Tabs from './tabs';
import Tree from './tree';

const components = [
    Button,
    Checkbox.Checkbox,
    Checkbox.CheckboxGroup,
    Dialog,
    Drawer,
    Form,
    Group,
    Icon,
    Input,
    Radio,
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