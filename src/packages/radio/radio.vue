<template>
    <div :class="[
        inline? 'vsm-label-inline': 'vsm-label-input'
    ]">
        <span v-if="label" class="vsm-label" v-html="label"></span>
        <div :class="[
            optionInline? 'vsm-cols': 'vsm-rows'
        ]">
            <label class="vsm-radio-label"
                :class="{
                    'vsm-disabled': opt.disabled
                }"
                v-for="(opt, i) in options"
                :key="i">
                <input type="radio" class="vsm-radio"
                    v-model="v"
                    :name="name"
                    :value="opt.value"
                    :checked="opt.value === v"
                    :disabled="opt.disabled"
                    @change="handleChange">
                <span class="vsm-label" v-html="opt.label"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vsmRadio',
    props: {
        value: String | Number,
        options: Array,

        name: String,
        label: String,

        inline: Boolean,
        optionInline: Boolean,
    },
    data () {
        return {
            v: this.value
        }
    },
    methods: {
        handleChange (e) {
            this.$emit('input', this.v, e);
            this.$emit('change', this.v, e);
        }
    }
}
</script>

<style>

</style>