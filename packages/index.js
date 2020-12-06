import './js/visam';

import Button from './components/button';
import Checkbox from './components/checkbox';
import Datetime from './components/datetime';
import Dialog from './components/dialog';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import Form from './components/form';
import Group from './components/group';
import Icon from './components/icon';
import Input from './components/input';
import List from './components/list';
import Radio from './components/radio';
import Select from './components/select';
import Slider from './components/slider';
import Swiper from './components/swiper';
import Table from './components/table';
import Tabs from './components/tabs';
import Tree from './components/tree';
import Page from './components/page';

import Tooltip from './directives/tooltip';

import Notice from './components/notice';

const components = [
    Button,
    Checkbox,
    Datetime,
    Dialog,
    Drawer,
    Dropdown,
    Form,
    Group,
    Icon,
    Input,
    List,
    Radio,
    Select,
    Slider,
    Swiper,
    Table,
    Tabs,
    Tree,
    Page,
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