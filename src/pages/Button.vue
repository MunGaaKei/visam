<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>

        <div class="codes">
            <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">
                <div class="panel vsm-cols" v-show="activeTab0 === 0">
                    <div class="vsm-col-6">
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
                opts: '——',
                def: 'null',
                desc: '链接内容，设置改属性时按钮标签名为&lt;a>'
            }, {
                prop: 'link',
                type: 'String',
                opts: '——',
                def: 'null',
                desc: '属性说明'
            }, {
                prop: 'link',
                type: 'String',
                opts: '——',
                def: 'null',
                desc: '属性说明'
            }, {
                prop: 'link',
                type: 'String',
                opts: '——',
                def: 'null',
                desc: '属性说明'
            }])
        }
    }
}
</script>