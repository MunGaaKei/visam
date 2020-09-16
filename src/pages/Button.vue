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
                        :disabled="disabled"
                        @click="round = !round"
                        to="javascript:;">默认按钮</vsm-button>
                    </div>
                    <div class="vsm-n vsm-rows">
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