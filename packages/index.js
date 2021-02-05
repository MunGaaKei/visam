import './js/visam';

import Button from './components/button/index';
import Calendar from './components/calendar/index';
import Checkbox from './components/checkbox/index';
import { Collapse, CollapseItem } from './components/collapse/index';
import { Cols, N } from './components/cols/index';
import Dialog from './components/dialog/index';
import Drawer from './components/drawer/index';
import Dropdown from './components/dropdown/index';
import Form from './components/form/index';
import Group from './components/group/index';
import Icon from './components/icon/index';
import Input from './components/input/index';
import Lazy from './components/lazy/index';
import List from './components/list/index';
import Radio from './components/radio/index';
import Select from './components/select/index';
import Slider from './components/slider/index';
import { Swiper, SwiperItem } from './components/swiper/index';
import Table from './components/table/index';
import Tabs from './components/tabs/index';
import Tree from './components/tree/index';
import Page from './components/page/index';

import vTooltip from './directives/v-tooltip/index';
import vLazy from './directives/v-lazy/index';

import Notice from './components/notice/index';

const components = [
    Button,
    Calendar,
    Collapse,
    CollapseItem,
    Cols,
    Checkbox,
    Dialog,
    Drawer,
    Dropdown,
    Form,
    Group,
    Icon,
    Input,
    Lazy,
    List,
    N,
    Radio,
    Select,
    Slider,
    Swiper,
    SwiperItem,
    Table,
    Tabs,
    Tree,
    Page,
];

const directives = [
    vTooltip,
    vLazy
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
    Button,
    Calendar,
    Collapse,
    CollapseItem,
    Cols,
    Checkbox,
    Dialog,
    Drawer,
    Dropdown,
    Form,
    Group,
    Icon,
    Input,
    Lazy,
    List,
    N,
    Radio,
    Select,
    Slider,
    Swiper,
    SwiperItem,
    Table,
    Tabs,
    Tree,
    Page,
    vTooltip,
    vLazy
}