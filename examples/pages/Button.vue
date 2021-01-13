<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>
        <p>其中<b>平白显示</b>会使<b>边框</b>失效。</p>
        <br>
        <vsm-cols>
            <div class="vsm-n widget">
                <vsm-button
                    :round="btnProps.includes('round')"
                    :reverse="btnProps.includes('reverse')"
                    :plain="btnProps.includes('plain')"
                    :loading="btnProps.includes('loading')"
                    :block="btnProps.includes('block')"
                    :disabled="btnProps.includes('disabled')"
                    :small="btnProps.includes('small')"
                    :color="color"
                >默认按钮</vsm-button>
            </div>
            <div class="vsm-col-3">
                <vsm-select label="属性" inline placeholder="属性配置" v-model="btnProps" :options="btnOptions" readonly multiple></vsm-select>
                <vsm-select label="颜色" inline placeholder="颜色" v-model="color" :options="colorOptions" readonly></vsm-select>
            </div>
        </vsm-cols>
        
        <Codes :codes="btnCode" show></Codes>

        <h3 class="section-title">按钮组</h3>
        <vsm-group>
            <vsm-button color="black">黑色</vsm-button>
            <vsm-button color="blue">蓝色</vsm-button>
            <vsm-button color="red">红色</vsm-button>
            <vsm-button color="yellow">黄色</vsm-button>
            <vsm-button color="green">绿色</vsm-button>
            <vsm-button color="white">白色</vsm-button>
        </vsm-group>
        <Codes :codes="groupCode"></Codes>

        <h3 class="section-title">参数说明</h3>
        <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

    </div>
</template>

<script>
export default {
    name: 'Button',
    data () {
        return {
            btnProps: ['round'],
            btnOptions: [
                { label: '圆角', value: 'round' },
                { label: '边框', value: 'reverse' },
                { label: '平白显示', value: 'plain' },
                { label: '加载状态', value: 'loading' },
                { label: '块级', value: 'block' },
                { label: '禁用状态', value: 'disabled' },
                { label: '小尺寸', value: 'small' },
            ],
            
            color: '',

            params: Object.freeze([{
                prop: 'to',
                type: 'String, Object',
                options: '',
                default: '',
                desc: '链接内容，设置改属性时按钮标签以<router-link>形式渲染，否则为<button>'
            }, {
                prop: 'type',
                type: 'String',
                options: '"button" 及其它原生类型',
                default: '"button"',
                desc: '当标签为<button>时属性type的值'
            }, {
                prop: 'color',
                type: 'String',
                options: 'red, blue, green, yellow, black, white',
                default: '',
                desc: '按钮颜色，值不为空时渲染成 .vsm-${color} 类'
            }, {
                prop: 'round',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮圆角'
            }, {
                prop: 'reverse',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮反色'
            }, {
                prop: 'plain',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮仅显示文本颜色'
            }, {
                prop: 'block',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮块级显示'
            }, {
                prop: 'loading',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮为加载状态'
            }, {
                prop: 'disabled',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮禁用状态'
            }, {
                prop: 'small',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '按钮尺寸小一号'
            }]),
            events: Object.freeze([])
        }
    },
    computed: {
        btnCode () {
            return `<vsm-button\
${this.btnProps.length? ' \r\n    '+ this.btnProps.join('\r\n    '): ''}\
${this.color? `\r\n    color="${this.color}"`: ''}>默认按钮</vsm-button>`;
        },
        groupCode () {
            return `<vsm-group>
    <vsm-button color="black">黑色</vsm-button>
    <vsm-button color="blue">蓝色</vsm-button>
    <vsm-button color="red">红色</vsm-button>
    <vsm-button color="yellow">黄色</vsm-button>
    <vsm-button color="green">绿色</vsm-button>
    <vsm-button color="white">白色</vsm-button>
</vsm-group>`;
        }
    }
}
</script>