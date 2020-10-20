<template>
  <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]">
      <span v-if="label" class="vsm-label" v-html="label"></span>

      <textarea v-if="type === 'textarea'"
        class="vsm-input vsm-textarea"
        :name="name"
        v-model="v"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        spellcheck="false"
        :resize="resize"
        :rows="rows"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        ></textarea>
      <vsm-group v-else>
        <slot name="prepend"></slot>
        <input class="vsm-input"
            :class="{
                'vsm-disabled': disabled
            }"
            v-model="v"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            spellcheck="false"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown="handleKeydown"
            @keyup="handleKeyup"
            @keypress="handleKeypress">
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
        name: String,
        type: {
            type: String,
            default: 'text'
        },
        readonly: Boolean,
        disabled: Boolean,
        resize: Boolean,
        rows: {
            type: Number | String,
            default: 3
        },
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
        },
        handleChange (e) {
            this.$emit('change', this.v, e);
        },
        handleFocus (e) {
            this.$emit('focus', e);
        },
        handleBlur (e) {
            this.$emit('blur', e);
        },
        handleKeydown (e) {
            this.$emit('keydown', e);
        },
        handleKeyup (e) {
            this.$emit('keyup', e);
        },
        handleKeypress (e) {
            this.$emit('keypress', e);
        }
    },
    watch: {
        value ( nv ) {
            this.v = nv;
        }
    }
}
</script>

<style>

</style>