import './js/visam';

import Button from './components/button';
import Checkbox from './components/checkbox';
import Dialog from './components/dialog';
import Drawer from './components/drawer';
import Form from './components/form';
import Group from './components/group';
import Icon from './components/icon';
import Input from './components/input';
import Radio from './components/radio';
import Select from './components/select';
import Slider from './components/slider';
import Table from './components/table';
import Tabs from './components/tabs';
import Tree from './components/tree';

import Tooltip from './directives/tooltip';

import Notice from './components/notice';

const components = [
    Button,
    Checkbox,
    Dialog,
    Drawer,
    Form,
    Group,
    Icon,
    Input,
    Radio,
    Select,
    Slider,
    Table,
    Tabs,
    Tree
];

const directives = [
    Tooltip,

];

const install = function(Vue, options) {

    components.map(component => {
        Vue.component(component.name, component);
    });

    directives.map(directive => {
        Vue.directive(directive.name, directive);
    });

    Vue.prototype.$notice = Notice;

}


export default {
    install,
    ...components,
    ...directives
}