<template>
  <div class="vsm-content">
      <h2>日期选择</h2>

      <h3 class="section-title">使用</h3>
      <vsm-calendar
        v-model="date"
        width="228px"></vsm-calendar>
    
      <Codes :codes="codes0" show></Codes>

      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
  </div>
</template>

<script>
export default {
    name: 'Datetime',
    data () {
        return {
            date: '2021-2-9',
            codes0: `<vsm-calendar
    v-model="date"
    width="228px"></vsm-calendar>

<\script>
export default {
  data () {
    return {
        date: '1999-9-9'
    }
  }
}
</\script>`,
            params: Object.freeze([{
                prop: 'value | v-model',
                type: 'String',
                options: '',
                default: '',
                desc: '可解析的日期字符串'
            }, {
                prop: 'format',
                type: 'String',
                options: '',
                default: '"Y-M-D"',
                desc: 'Y为年占位符，M为月份占位符，D为日期占位符'
            }, {
                prop: 'weeks',
                type: 'Array',
                options: '',
                default: "['日', '一', '二', '三', '四', '五', '六']",
                desc: '星期文本'
            }, {
                prop: 'min',
                type: 'String',
                options: '',
                default: '',
                desc: '最小日期'
            }, {
                prop: 'max',
                type: 'String',
                options: '',
                default: '',
                desc: '最大日期'
            }, {
                prop: 'zero',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '月份和日期小于10时是否补零'
            }, {
                prop: 'inline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '标签与选项同行'
            }, {
                prop: 'width',
                type: 'String',
                options: '',
                default: '',
                desc: '宽度'
            }, {
                prop: 'name',
                type: 'String',
                options: '',
                default: '',
                desc: '原生属性'
            }, {
                prop: 'placeholder',
                type: 'String',
                options: '',
                default: '',
                desc: '原生属性'
            }, {
                prop: 'readonly',
                type: 'String',
                options: '',
                default: '',
                desc: '原生属性'
            }, {
                prop: 'label',
                type: 'String',
                options: '',
                default: '',
                desc: '标签文本'
            }, ])

        }
    }
}
</script>