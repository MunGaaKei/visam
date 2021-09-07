<template>
    <div class="vsm-content">
        <h2>选择框</h2>

        <h3 class="section-title">使用</h3>
        <p>注意，这里使用 <code class="vsm-blue vsm-reverse">filter</code> 属性，当通过输入改变值时，选项列表会过滤掉不匹配该值的其余选项。</p>
        <br>
        <vsm-select
            class="vsm-col-33"
            v-model="value"
            :options="options"
            inline
            label="选择框"
            placeholder="请选择"
            filter
            ></vsm-select>
        <div class="vsm-content" v-if="value">值：{{ value }}</div>
        
        <Codes :codes="codes0"></Codes>

        <h3 class="section-title">多选</h3>
        <p>多选时，绑定的值类型须为一个数组。</p>
        <br>
        <vsm-button color="yellow" @click="addOption">添加选项</vsm-button>
        <br>
        <br>
        <vsm-select
            class="vsm-col-33"
            v-model="values"
            :options="options1"
            multiple
            inline
            label="多选"
            placeholder="请选择"
        ></vsm-select>
        <div class="vsm-content" v-if="values.length">值：{{ values }}</div>
        <Codes :codes="codes1"></Codes>

        <h3 class="section-title">参数说明</h3>
        <vsm-table :data="params" :header="paramsHeader"></vsm-table>
        

  </div>
</template>

<script>
export default {
    name: 'Select',
    data () {
        return {
            value: '',
            values: [],
            options: [{
                label: '默认',
                value: 'Foo'
            }, 'Bar', 'Baz', 'Qux'],
            options1: [{
                label: '默认',
                value: 'Foo'
            }, 'Bar', 'Baz', 'Qux'],
            params: Object.freeze([{
                prop: 'value | v-model',
                type: 'String | Array | Number',
                options: '',
                default: '',
                desc: '当为多选时，类型应该为一个数组'
            }, {
                prop: 'name',
                type: 'String',
                options: '',
                default: '',
                desc: '控件名'
            }, {
                prop: 'options',
                type: 'Array',
                options: '',
                default: '',
                desc: '选项数组'
            }, {
                prop: 'show-options',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否默认展示选项'
            }, {
                prop: 'multiple',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否可多选'
            }, {
                prop: 'filter',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否开启过滤选项功能，开启后可通过输入框值进行匹配，匹配的内容包括选项的label和value。<br>也可在选项加上keywords属性，值为字符串或数组。'
            }, {
                prop: 'filter-delay',
                type: 'Number | String',
                options: '',
                default: '200',
                desc: '过滤选项延时，单位毫秒ms。默认的防抖功能。'
            }, {
                prop: 'top',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '向上方打开'
            }, {
                prop: 'readonly',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '只读。多选时，可通过关闭filter设置。'
            }, {
                prop: 'inline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '标签与控件同行'
            }, {
                prop: 'label',
                type: 'String',
                options: '',
                default: '',
                desc: '标签名'
            }, {
                prop: 'placeholder',
                type: 'String',
                options: '',
                default: '',
                desc: '占位符'
            }, {
                prop: 'disabled',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '控件禁用'
            }, {
                prop: 'spellcheck',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '拼写检查'
            }, {
                prop: 'pattern',
                type: 'Regexp',
                options: '',
                default: '',
                desc: '验证正则'
            }, {
                prop: 'autofocus',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '拼写检查'
            }, {
                prop: 'autocomplete',
                type: 'String',
                options: '"on", "off"',
                default: '"on"',
                desc: '自动完成填写，默认开启'
            }, {
                prop: '@select',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听选项选择事件，参数（option, $event）',
                event: true
            }, {
                prop: '@toggle',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听选项框打开关闭，参数（show)',
                event: true
            }]),
            cursor: 1,
        }
    },
    computed: {
        codes0 () {
            return `<vsm-select
    class="vsm-col-33"
    v-model="value"
    :options="options"
    inline
    label="选择框"
    placeholder="请选择"
    filter
    ></vsm-select>
    
<\script>
export default {
  data () {
    return {
        value: '',
        options: [{
            label: '默认',
            value: 'Foo'
        }, 'Bar', 'Baz', 'Qux']
    }
  }
}
</\script>`;
        },
        codes1 () {
            return `<vsm-select
    class="vsm-col-33"
    v-model="values"
    :options="options"
    multiple
    inline
    label="多选"
    placeholder="请选择"
></vsm-select>
    
<\script>
export default {
  data () {
    return {
        values: [],
        options: [{
            label: '默认',
            value: 'Foo'
        }, 'Bar', 'Baz', 'Qux']
    }
  }
}
</\script>`;
        }
    },
    methods: {
        addOption () {
            this.options1.push(`Option${this.cursor++}`);
        }
    },
}
</script>