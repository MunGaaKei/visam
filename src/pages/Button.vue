<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>

        <div class="codes">
            <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">
                <div class="panel vsm-cols" v-show="activeTab0 === 0">
                    <div class="vsm-col-6 widget">
                        <vsm-button
                        :round="round"
                        :reverse="reverse"
                        :plain="plain"
                        :loading="loading"
                        :color="color"
                        :block="block"
                        :disabled="disabled">默认按钮</vsm-button>
                    </div>
                    <div class="vsm-n vsm-rows vsm-right">
                        <vsm-checkbox v-model="round" type="slide">Round</vsm-checkbox>
                        <vsm-checkbox v-model="reverse" type="slide">Reverse</vsm-checkbox>
                        <vsm-checkbox v-model="plain" type="slide">Plain</vsm-checkbox>
                        <vsm-checkbox v-model="block" type="slide">Block</vsm-checkbox>
                        <vsm-checkbox v-model="loading" type="slide">Loading</vsm-checkbox>
                        <vsm-checkbox v-model="disabled" type="slide">Disabled</vsm-checkbox>
                    </div>
                </div>
                <div v-show="activeTab0 === 1" class="panel">
<pre v-highlight>
<code class="html">
&lt;vsm-button&gt;&lt;/vsm-button&gt;
&lt;script>

&lt;/script>

</code>
</pre>
                </div>
            </vsm-tabs>
        </div>

        <h3 class="section-title">参数设置</h3>
        <Params :params="params"></Params>

    </div>
</template>

<script>
export default {
    name: 'Button',
    data () {
        return {
            round: false,
            reverse: false,
            plain: false,
            loading: false,
            color: '',
            block: false,
            disabled: false,

            activeTab0: 0,

            params: Object.freeze([{
                prop: 'link',
                type: 'String',
                opts: '—',
                def: 'null',
                desc: '链接内容，设置改属性时按钮标签名为&lt;a>，否则为&lt;button>'
            }, {
                prop: 'type',
                type: 'String',
                opts: 'button, submit, reset',
                def: 'button',
                desc: '当标签为&lt;button>时属性type的值'
            }, {
                prop: 'color',
                type: 'String',
                opts: 'red, blue, green, yellow, black, white',
                def: 'null',
                desc: '按钮颜色，值不为空时渲染成 .vsm-${color} 类'
            }, {
                prop: 'round',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮圆角'
            }, {
                prop: 'reverse',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮反色'
            }, {
                prop: 'plain',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮仅显示文本，hover时才显示颜色'
            }, {
                prop: 'block',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮块级显示'
            }, {
                prop: 'loading',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮为加载状态'
            }, {
                prop: 'disabled',
                type: 'Boolean',
                opts: '—',
                def: 'false',
                desc: '按钮禁用状态'
            }])
        }
    }
}
</script>