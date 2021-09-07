<template>
  <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]"
        :style="width? `width:${width}`: ''">
      <span v-if="label" class="vsm-label" v-html="label"></span>

      <textarea v-if="type === 'textarea'"
        class="vsm-input vsm-textarea"
        :class="{
            'vsm-disabled': disabled
        }"
        :name="name"
        :value="val"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :spellcheck="spellcheck"
        :autofocus="autofocus"
        :resize="resize"
        :rows="rows"
        :pattern="pattern"
        v-on="listeners"
        ></textarea>
      <vsm-group v-else>
        <slot name="prepend"></slot>
        <div v-if="type === 'number'" class="vsm-spinners vsm-group-item">
            <a class="iconfont icon-subtract vsm-spinner" @click="decrease"></a>
        </div>
        <input class="vsm-input vsm-group-item"
            :class="{
                'vsm-disabled': disabled,
            }"
            :value="val"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :spellcheck="spellcheck"
            :autofocus="autofocus"
            :pattern="pattern"
            :step="step"
            v-on="listeners">
        <div v-if="clear && value.length" class="vsm-spinners vsm-group-item">
            <a class="iconfont icon-close vsm-spinner" @click="clearText"></a>
        </div>
        <div v-if="type === 'number'" class="vsm-spinners vsm-group-item">
            <a class="iconfont icon-add vsm-spinner" @click="increase"></a>
        </div>
        <slot name="append"></slot>
      </vsm-group>

  </label>
</template>

<script>
import vsmGroup from '../group/index';

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
        width: String,
        pattern: String,
        autocomplete: Boolean,
        spellcheck: Boolean,
        autofocus: Boolean,
        readonly: Boolean,
        disabled: Boolean,
        resize: Boolean,
        max: Number | String,
        min: Number | String,
        step: {
            type: Number | String,
            default: 1
        },
        rows: {
            type: Number | String,
            default: 3
        },
        clear: Boolean,
    },
    data () {
        return {
            currentValue: this.value
        }
    },
    computed: {
        listeners () {
            const vm = this;
            return Object.assign({}, this.$listeners, {
                input (e) {
                    var $input = e.target;
                    var val = $input.value;
                    if ( vm.type === 'number' ) {
                        val = vm.checkRange(val, vm.min, vm.max);
                        $input.value = val;
                    }
                    vm.setValue(val, e);
                },
            });
        },
        val: {
            get () {
                return this.value;
            },
            set ( val ) {
                this.$emit('input', val);
            }
        }
    },
    methods: {
        setValue ( val, e ) {
            if ( this.type === 'number' ) {
                val = this.checkRange(val, this.min, this.max);
                this.currentValue = val;
            }
            this.$emit('input', val, e);
        },
        checkRange (val, min, max) {
            val = max? Math.min(max, val): val;
            val = min? Math.max(min, val): val;
            return val;
        },
        increase (e) {
            this.setValue(Number(this.currentValue) + Number(this.step), e);
        },
        decrease (e) {
            this.setValue(Number(this.currentValue) - Number(this.step), e);
        },
        clearText (e) {
            this.setValue('', e);
        }
    },
    components: {
        vsmGroup
    }
}
</script>