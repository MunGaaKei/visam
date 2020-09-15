<template>
    <div class="vsm-content">
        <h2>按钮</h2>

        <h3 class="section-title">基础</h3>

        <div class="codes">
            <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">
                <transition name="fade">
                    
                    <div v-if="activeTab0 === 0" class="panel vsm-cols">
                        <div class="vsm-col-5">
                            <vsm-button
                            :round="round"
                            :reverse="reverse"
                            :plain="plain"
                            :loading="loading"
                            :color="color"
                            :block="block"
                            :disabled="disabled"
                            to="javascript:;">默认按钮</vsm-button>
                        </div>
                        <div class="vsm-n">
                            <vsm-checkbox v-model="round">Round</vsm-checkbox>
                        </div>

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
            block: false,
            disabled: false,

            activeTab0: 0,

        }
    }
}
</script>

<style lang="scss">

</style>