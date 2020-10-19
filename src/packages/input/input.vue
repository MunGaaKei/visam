<template>
  <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]">
      <span v-if="label" class="vsm-label" v-html="label"></span>
      <vsm-group>
        <slot name="prepend"></slot>
        <input class="vsm-input"
            :class="{
                'vsm-disabled': disabled
            }"
            v-model="v"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            spellcheck="false"
            @input="handleInput">
        <slot name="append"></slot>
      </vsm-group>
  </label>
</template>

<script>
export default {
    name: 'vsmInput',
    props: {
        inline: Boolean,

        label: String,
        value: {
            type: String | Number,
            default: ''
        },
        
        placeholder: String,
        type: {
            type: String,
            default: 'text'
        },
        readonly: Boolean,
        disabled: Boolean,
    },
    data () {
        return {
            v: this.value
        }
    },
    mounted () {
        this.bindGroupClass();
    },
    methods: {
        bindGroupClass () {
            let $s = this.$slots;
            for (let k in $s) {
                $s[k].forEach(node => {
                    node.elm.classList.add('vsm-group-item');
                    node.elm.classList.add('vsm-input-'+ k);
                });
            }
        },
        handleInput ( e ) {
            this.$emit('input', this.v, e);
        }
    }
}
</script>

<style>

</style>