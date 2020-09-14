<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>

        <!-- vsm-tabs -->
        
        <div class="codes">
            <vsm-tabs :tabs="tabs" :barConfigs="barConf" :active="activeTab0" @change="switchTab($event, 0)">
                <transition name="fade">
                    
                    <div v-if="activeTab0 === 0" class="panel">
                        <vsm-button
                        v-if="activeTab0 === 0"
                        :round="round"
                        :reverse="reverse"
                        :plain="plain"
                        :loading="loading"
                        :color="color"
                        :disabled="disabled"
                        to="javascript:;">默认按钮</vsm-button>
                    </div>

                    <div v-if="activeTab0 === 1" class="panel">
<pre v-highlight>
<code class="html">
&lt;vsm-button&gt;&lt;/vsm-button&gt;
&lt;script>

&lt;/script>

</code>
</pre>
                    </div>
                </transition>
            </vsm-tabs>
        </div>

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
            disabled: false,

            tabs: [
                '<i class="iconfont icon-plugin"></i>',
                '<i class="iconfont icon-script"></i>'
            ],
            barConf: {
                color: '#282c34'
            },
            activeTab0: 0,

        }
    },
    methods: {
        switchTab (i, tab) {
            this[`activeTab${tab}`] = i;
        }
    }
}
</script>