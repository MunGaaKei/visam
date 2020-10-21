<template>
  <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]">
      <span v-if="label" class="vsm-label" v-html="label"></span>

      <textarea v-if="type === 'textarea'"
        class="vsm-input vsm-textarea"
        :class="{
            'vsm-disabled': disabled
        }"
        :name="name"
        v-model="v"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :spellcheck="spellcheck"
        :autofocus="autofocus"
        :resize="resize"
        :rows="rows"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keyup.enter="handleEnter"
        ></textarea>
      <vsm-group v-else>
        <slot name="prepend"></slot>
        <input class="vsm-input vsm-group-item"
            :class="{
                'vsm-disabled': disabled
            }"
            v-model="v"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :spellcheck="spellcheck"
            :autofocus="autofocus"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown="handleKeydown"
            @keyup="handleKeyup"
            @keypress="handleKeypress"
            @keyup.enter="handleEnter">
        <div v-if="type === 'number'" class="vsm-input-spinner vsm-group-item">
            <a class="iconfont icon-up" @click="increase"></a>
            <a class="iconfont icon-down" @click="decrease"></a>
        </div>
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
        pattern: String,
        autocomplete: Boolean,
        spellcheck: Boolean,
        autofocus: Boolean,
        readonly: Boolean,
        disabled: Boolean,
        resize: Boolean,
        max: Number,
        min: Number,
        step: {
            type: Number,
            default: 1
        },
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
    methods: {
        setValue ( val ) {

            if ( this.type === 'number' ) {
                val = this.max? Math.min(this.max, val): val;
                val = this.min? Math.max(this.min, val): val;
            }
            
            this.v = val;
        },
        increase () {
            this.setValue(Number(this.v) + this.step);
        },
        decrease () {
            this.setValue(Number(this.v) - this.step);
        },
        handleInput ( e ) {
            let { value } = e.target;
            this.setValue(value);
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
        },
        handleEnter (e) {
            this.$emit('enter', e);
        }
    },
    watch: {
        value ( nv ) {
            this.setValue(nv);
        }
    }
}
</script>

<style>

</style>