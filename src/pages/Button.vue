<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>
        <div class="codes">
            <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
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

        <h3 class="section-title">按钮组</h3>
        <div class="codes">
            <vsm-tabs :tabs="codeTabs" v-model="activeTab1">
                <div class="panel" v-show="activeTab1 === 0">
                    <vsm-group>
                        <vsm-button color="black">黑色</vsm-button>
                        <vsm-button color="blue">蓝色</vsm-button>
                        <vsm-button color="red">红色</vsm-button>
                        <vsm-button color="yellow">黄色</vsm-button>
                        <vsm-button color="green">绿色</vsm-button>
                        <vsm-button color="white">白色</vsm-button>
                    </vsm-group>
                </div>
                <div v-show="activeTab1 === 1" class="panel">
<pre v-highlight>
<code class="html">
&lt;vsm-group&gt;
    &lt;vsm-button color="black"&gt;黑色&lt;/vsm-button&gt;
    &lt;vsm-button color="blue"&gt;蓝色&lt;/vsm-button&gt;
    &lt;vsm-button color="red"&gt;红色&lt;/vsm-button&gt;
    &lt;vsm-button color="yellow"&gt;黄色&lt;/vsm-button&gt;
    &lt;vsm-button color="green"&gt;绿色&lt;/vsm-button&gt;
    &lt;vsm-button color="white"&gt;白色&lt;/vsm-button&gt;
&lt;/vsm-group&gt;
&lt;script>

&lt;/script>

</code>
</pre>
                </div>
            </vsm-tabs>
        </div>

        <h3 class="section-title">参数设置</h3>
        <vsm-tabs :tabs="paramTabs" v-model="activeTab2">
            <Params v-show="activeTab2 === 0" :params="params"></Params>
            <Params v-show="activeTab2 === 1" :params="events"></Params>
        </vsm-tabs>

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
            activeTab1: 0,
            activeTab2: 0,

            params: Object.freeze([{
                prop: 'to',
                type: 'String, Object',
                opts: '—',
                def: 'null',
                desc: '链接内容，设置改属性时按钮标签以&lt;router-link>形式渲染，否则为&lt;button>'
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
            }]),
            events: Object.freeze([])
        }
    }
}
</script>