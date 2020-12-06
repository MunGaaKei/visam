<template>
  <div :class="[
      inline? 'vsm-label-inline': 'vsm-label-input'
  ]">

    <span v-if="label" class="vsm-label" v-html="label"></span>

    <div :class="[
        optionInline? 'vsm-cols': 'vsm-rows'
    ]">

      <template v-if="options">
        <label v-for="(opt, i) in opts"
          :key="i"
          class="vsm-checkbox-label"
          :class="{
            'vsm-round': round
          }">
          <input type="checkbox"
            class="vsm-checkbox"
            ref="checkbox"
            :class="[css]"
            v-model="currentValue"
            :name="name"
            :value="opt.value"
            :disabled="opt.disabled"
            v-on="listeners">
          <span v-html="opt.label"></span>
        </label>
      </template>
      
      <template v-else>
        <label class="vsm-checkbox-label">
          <input type="checkbox" class="vsm-checkbox"
            :class="[css]"
            v-model="currentValue"
            :name="name"
            v-on="listeners">
          <span><slot></slot></span>
        </label>
      </template>

    </div>
  </div>
</template>

<script>
export default {
    name: 'vsmCheckbox',
    props: {
      value: Array | Boolean | String | Number,

      name: String,
      options: Array,
      label: String,

      type: {
        type: String,
        default: 'normal',
        validator ( t ) {
          return ['normal', 'slide', 'text', 'button', 'textless'].includes(t);
        }
      },

      inline: Boolean,
      optionInline: Boolean,
      round: Boolean,
      max: Number | String,
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data () {
      return {
        currentValue: this.value,
        opts: []
      }
    },
    computed: {
      listeners () {
          const vm = this;
          return Object.assign({}, this.$listeners, {
            click (e) {
              if (vm.opts.length && vm.currentValue.length >= vm.max && e.target.checked) {
                e.preventDefault();
              }
              vm.$emit('click', e);
            },
            change (e) {
              vm.$emit('change', vm.currentValue, e);
            }
          });
      },
      css () {
        return `vsm-checkbox-${this.type}`;
      },
    },
    methods: {
      setValue (value) {
        if (this.max && this.options && value.length > this.max) {
          return false;
        }
        this.currentValue = value;
      },
      formatOptions () {
        this.opts = this.options.map(opt => {
          return (typeof opt === 'string' || typeof opt === 'number')? {
            label: opt,
            value: opt
          }: opt;
        });
      }
    },
    created () {
      if (this.options) this.formatOptions();
    },
    watch: {
      value (value) {
        this.setValue(value);
      },
      options (value) {
        this.formatOptions();
      }
    }
}
</script>