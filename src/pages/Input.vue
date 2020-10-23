<template>
  <div class="vsm-content">
    <h2>输入框</h2>

    <h3 class="section-title">基本</h3>
    <div class="codes">
      <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
        <div class="panel" v-show="activeTab0 === 0">
          <vsm-input v-model="username"
            label="用户名"></vsm-input>
        </div>
      </vsm-tabs>
    </div>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader stickyLeft="prop"></vsm-table>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      activeTab0: 0,
      username: '',

      params: [{
        prop: 'v-model',
        desc: '绑定值',
        type: 'String | Number',
        options: '-',
        default: '""'
      }, {
        prop: 'type',
        desc: '输入框类型',
        type: 'String',
        options: '"text"及其它原生类型,<br> "textarea"',
        default: '"text"'
      }, {
        prop: 'name',
        desc: '原生属性',
        type: 'String',
        options: '-',
        default: '-'
      }, {
        prop: 'resize',
        desc: '原生属性',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        prop: 'rows',
        desc: '多行输入框初始行数',
        type: 'Number',
        options: '-',
        default: '3'
      }, {
        prop: 'step',
        desc: '数字类型时，计数器步长',
        type: 'Number',
        options: '-',
        default: '1'
      }, {
        prop: 'max',
        desc: '数字类型时，值的最大值',
        type: 'Number',
        options: '-',
        default: '-'
      }, {
        prop: 'min',
        desc: '数字类型时，值的最大值',
        type: 'Number',
        options: '-',
        default: '-'
      }, {
        prop: 'readonly',
        desc: '只读',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        prop: 'disabled',
        desc: '禁用状态',
        type: 'Boolean',
        options: '-',
        default: 'false'
      }, {
        prop: 'spellcheck',
        desc: '拼写检查',
        type: 'Boolean',
        options: '-',
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
        options: '-',
        default: 'false'
      }],
    }
  }
}
</script>

<style>

</style>