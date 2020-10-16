import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';

Checkbox.install = Vue => Vue.component(Checkbox.name, Checkbox)
CheckboxGroup.install = Vue => Vue.component(CheckboxGroup.name, CheckboxGroup)

export default {
  Checkbox,
  CheckboxGroup
};