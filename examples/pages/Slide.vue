<template>
  <div class="vsm-content">
    <h2>滑块</h2>

    <h3 class="section-title">基本用法</h3>
    <p>当前值：<i>{{ value }}</i></p>
    <br>
    <div class="vsm-cols">
        <vsm-slider label="滑块"
            v-model="value"
            inline
            :min="min"
            :max="max"
            :part="part"></vsm-slider>
        
        <vsm-form>
            <vsm-input
                label="最小值"
                type="number"
                v-model="min"
                :max="max"
                inline></vsm-input>
            <vsm-input
                label="最大值"
                type="number"
                v-model="max"
                :min="min"
                inline></vsm-input>
            <vsm-input
                label="分段数"
                type="number"
                v-model="part"
                :min="1"
                inline></vsm-input>
        </vsm-form>
    </div>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">范围选择</h3>
    <p>范围选择时绑定值为数组类型。part可设置为包含多个值的数组，并且可通过设置force-step属性强制值为间断点里的值。</p>
    <p>当前值：<i>{{ values }}</i></p>
    <br>
    <div class="vsm-cols">
        <vsm-slider label="宽度"
            v-model="values"
            inline
            :min="0"
            :max="100"
            :part="marks"
            :force-step="force"
            unit="px"></vsm-slider>
        
    </div>
    <Codes :codes="codes1"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
      
  </div>
</template>

<script>
export default {
    name: 'Slide',
    data () {
        return {
            min: 0,
            max: 100,
            part: 1,
            value: 20,
            values: [20, 80],
            marks: [0, 10, 30, 70, 100],
            force: true,
            params: Object.freeze([{
                prop: 'value | v-model',
                type: 'Number | Array',
                options: '',
                default: '',
                desc: '绑定值'
            }, {
                prop: 'label',
                type: 'String',
                options: '',
                default: '',
                desc: '标签名'
            }, {
                prop: 'inline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '标签与滑块同行'
            }, {
                prop: 'min',
                type: 'Number',
                options: '',
                default: '0',
                desc: '最小值'
            }, {
                prop: 'max',
                type: 'Number',
                options: '',
                default: '100',
                desc: '最大值'
            }, {
                prop: 'part',
                type: 'Number | Array',
                options: '',
                default: '1',
                desc: '当为数值时，表示分段数，以间隔点隔开。当为数组时，表示间隔点的值。'
            }, {
                prop: 'force-step',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '强制值为相邻最近间隔点的值，需设置part'
            }, {
                prop: 'unit',
                type: 'String',
                options: '',
                default: '',
                desc: '值加上单位，会在hover时显示'
            }, {
                prop: 'name',
                type: 'String',
                options: '',
                default: '',
                desc: '原生属性'
            }])
        }
    },
    computed: {
        codes0 () {
            return `<vsm-slider label="滑块"
    v-model="value"
    inline
    min="${this.min}"
    max="${this.max}"\
${this.part === 1? '': `\r\n    part="${this.part}"`}></vsm-slider>`;
        },
        codes1 () {
            return `<vsm-slider label="宽度"
    v-model="values"
    inline
    :min="0"
    :max="100"
    :part="marks"
    force-step
    unit="px"></vsm-slider>
    
<\script>
export default {
  data () {
    return {
        values: [20, 80],
        marks: [0, 10, 30, 70, 100]
    }
  }
}
</\script>`;
        }
    }
}
</script>