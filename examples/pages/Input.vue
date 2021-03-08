<template>
  <div class="vsm-content">
    <h2>输入框</h2>

    <h3 class="section-title">基本类型</h3>
    <vsm-input
      v-model="username"
      name="username"
      label="用户名"
      inline
      clear
      placeholder="请输入用户名"
      class="vsm-col-5"></vsm-input>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">数字输入框</h3>
    <vsm-input
      type="number"
      v-model="age"
      name="age"
      step="5"
      min="0"
      max="120"
      class="vsm-col-3"></vsm-input>
    <Codes :codes="codes1"></Codes>

    <h3 class="section-title">多行文本框</h3>
    <vsm-input
      type="textarea"
      v-model="username"></vsm-input>
    <Codes :codes="codes2"></Codes>

    <h3 class="section-title">#SLOT</h3>
    <p>输入框前后可通过插槽方式插入。</p>
    <br>
    <vsm-input
      v-model="username"
      label="用户名"
      class="vsm-col-5">
      <vsm-icon icon="user" slot="prepend"></vsm-icon>
      <vsm-button slot="append">校验</vsm-button>
    </vsm-input>
    <Codes :codes="codes3"></Codes>
    

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      username: '伽马',
      age: 24,
      
      codes0: `<vsm-input
  v-model="username"
  name="username"
  label="用户名"
  clear
  inline
  placeholder="请输入用户名"></vsm-input>`,
      codes1: `<vsm-input
  type="number"
  v-model="age"
  name="age"
  step="5"
  min="0"
  max="120"></vsm-input>`,
      codes2: `<vsm-input
  type="textarea"
  v-model="username"></vsm-input>`,
      codes3: `<vsm-input
  v-model="username"
  label="用户名">
  <vsm-icon icon="user" slot="prepend"></vsm-icon>
  <vsm-button slot="append">校验</vsm-button>
</vsm-input>`,

      params: [{
        prop: 'value | v-model',
        desc: '绑定值',
        type: 'String | Number',
        options: '',
        default: '""'
      }, {
        prop: 'type',
        desc: '输入框类型',
        type: 'String',
        options: '"text"及其它原生类型, "textarea", "number"',
        default: '"text"'
      }, {
        prop: 'inline',
        desc: '标签与控件同行',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'placeholder',
        desc: '占位符',
        type: 'String',
        options: '',
        default: ''
      }, {
        prop: 'name',
        desc: '原生属性',
        type: 'String',
        options: '',
        default: ''
      }, {
        prop: 'width',
        desc: '控件宽度',
        type: 'String',
        options: '',
        default: ''
      }, {
        prop: 'resize',
        desc: '原生属性',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'rows',
        desc: '多行输入框初始行数',
        type: 'Number',
        options: '',
        default: '3'
      }, {
        prop: 'clear',
        desc: '显示清除按钮',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'step',
        desc: '数字类型时，计数器步长',
        type: 'Number',
        options: '',
        default: '1'
      }, {
        prop: 'max',
        desc: '数字类型时，值的最大值',
        type: 'Number',
        options: '',
        default: ''
      }, {
        prop: 'min',
        desc: '数字类型时，值的最大值',
        type: 'Number',
        options: '',
        default: ''
      }, {
        prop: 'readonly',
        desc: '只读',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'disabled',
        desc: '禁用状态',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'spellcheck',
        desc: '拼写检查',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'autocomplete',
        desc: '自动填写',
        type: 'String',
        options: '"on", "off"',
        default: '"off"'
      }, {
        prop: 'readonly',
        desc: '只读',
        type: 'Boolean',
        options: '',
        default: 'false'
      }, {
        prop: 'pattern',
        type: 'Regexp',
        options: '',
        default: '',
        desc: '验证正则'
      }, {
        prop: 'slot:prepend',
        desc: '在控件前方插入',
        type: '',
        options: '',
        default: '',
        slot: true
      }, {
        prop: 'slot:append',
        desc: '在控件后方插入',
        type: '',
        options: '',
        default: '',
        slot: true
      }],
    }
  }
}
</script>

<style>

</style>