<template>
  <div class="vsm-content">
      <h2>单选框</h2>

      <h3 class="section-title">基本用法</h3>
      <p>值：{{ value }}</p>
      <br>
      <div class="vsm-cols">
        <vsm-radio
            v-model="value"
            :options="options"
            :inline="otherProps.includes('inline')"
            :option-inline="otherProps.includes('option-inline')"
            label="单选框："></vsm-radio>
        <vsm-checkbox type="slide" v-model="otherProps" :options="otherOptions"></vsm-checkbox>
      </div>
      <Codes :codes="codes0" show></Codes>
      
      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
      
  </div>
</template>

<script>
export default {
    name: 'Radio',
    data () {
        return {
            value: 'Bar',
            options: [{
                label: '默认', value: 'Bar'
            }, 'Foo', 'Baz', 'Qux', {
                label: '禁用', value: 'disabled', disabled: true
            }],
            otherOptions: [
                { label: '标签同行', value: 'inline' },
                { label: '选项同行', value: 'option-inline' },
            ],
            otherProps: [],
            params: Object.freeze([{
                prop: 'value | v-model',
                type: 'Number | String | Array | Boolean',
                options: '',
                default: '',
                desc: '当为多选框组时，须绑定数组。'
            }, {
                prop: 'options',
                type: 'Array',
                options: '',
                default: '[]',
                desc: '选项数组，可包括label，value，disabled属性'
            }, {
                prop: 'inline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '标签与选项同行'
            }, {
                prop: 'option-inline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '选项以行内形式排列'
            }, {
                prop: 'name',
                type: 'String',
                options: '',
                default: '',
                desc: '原生属性'
            }, {
                prop: '@change',
                type: 'Function',
                options: '',
                default: '',
                desc: '选项变化时触发，参数（value, $event）',
                event: true
            }]),
        }
    },
    computed: {
        codes0 () {
            return `<vsm-radio
    label="单选框："
    v-model="value"
    :options="options"\
    ${this.otherProps.includes('inline')? '\r\n    inline': ''}\
    ${this.otherProps.includes('option-inline')? '\r\n    option-inline': ''}
    ></vsm-radio>

<\script>
export default {
  data () {
    return {
        value: 'Bar',
        options: [{
            label: '默认', value: 'Bar'
        }, 'Foo', 'Baz', 'Qux', {
            label: '禁用', value: 'disabled', disabled: true
        }],
    }
  }
}
</\script>`;
        }
    }
}
</script>