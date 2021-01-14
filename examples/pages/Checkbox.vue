<template>
  <div class="vsm-content">
      <h2>多选框</h2>

      <h3 class="section-title">基本用法</h3>
      <div class="vsm-cols">
        <vsm-checkbox v-model="value">值: {{ value }}</vsm-checkbox>
      </div>
      <Codes :codes="codes0" show></Codes>


      <h3 class="section-title">多选框组</h3>
      <p>v-model需要绑定一个数组类型。</p>
      <p>值：{{ values }}</p>
      <br>
      <vsm-cols>
        <vsm-checkbox
            v-model="values"
            :options="options"
            :type="type"
            label="多选框："
            :inline="otherProps.includes('inline')"
            :option-inline="otherProps.includes('option-inline')"
            :round="otherProps.includes('round')"
            ></vsm-checkbox>
        <div class="vsm-n vsm-cols">
            <vsm-radio
                :options="typeOptions"
                v-model="type"
                label="类型"
                inline></vsm-radio>
            <vsm-checkbox type="slide" v-model="otherProps" :options="otherOptions"></vsm-checkbox>
        </div>
      </vsm-cols>
      <Codes :codes="codes1" show></Codes>

      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
      
  </div>
</template>

<script>
export default {
    name: 'Checkbox',
    data () {
        return {
            value: true,
            values: ['Bar'],
            options: [{
                label: '默认', value: 'Bar'
            }, 'Foo', 'Baz', 'Qux', {
                label: '禁用', value: 'disabled', disabled: true
            }],
            type: 'normal',
            typeOptions: [
                { label: '默认', value: 'normal' },
                { label: '滑块', value: 'slide' },
                { label: '文本', value: 'text' },
                { label: '无文本', value: 'textless' },
                { label: '按钮', value: 'button' },
            ],
            otherOptions: [
                { label: '标签同行', value: 'inline' },
                { label: '选项同行', value: 'option-inline' },
                { label: '圆角', value: 'round' },
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
                prop: 'type',
                type: 'String',
                options: '"normal", "slide", "text", "textless", "button"',
                default: '"normal"',
                desc: '多选框的类型'
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
                prop: 'round',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '选项圆角显示'
            }, {
                prop: 'max',
                type: 'String | Number',
                options: '',
                default: '',
                desc: '最多可选多少个选项'
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
            return `<vsm-checkbox v-model="value">值: {{ value }}</vsm-checkbox>

<\script>
export default {
  data () {
    return {
        value: true
    }
  }
}
</\script>`;
        },
        codes1 () {
            return `<vsm-checkbox
    label="多选框："
    v-model="values"
    :options="options"\
    ${this.type === 'normal'? '': `\r\n    type="${this.type}"`}\
    ${this.otherProps.includes('inline')? '\r\n    inline': ''}\
    ${this.otherProps.includes('option-inline')? '\r\n    option-inline': ''}\
    ${this.otherProps.includes('round')? '\r\n    round': ''}
    ></vsm-checkbox>

<\script>
export default {
  data () {
    return {
        values: ['Bar'],
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