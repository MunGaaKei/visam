import Collapse from './collapse';
import CollapseItem from './collapse-item';

Collapse.install = Vue => Vue.component(Collapse.name, Collapse);
CollapseItem.install = Vue => Vue.component(CollapseItem.name, CollapseItem);

export {
    Collapse,
    CollapseItem
};