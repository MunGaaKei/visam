<template>
  <div :class="[
      inline? 'vsm-label-inline': 'vsm-label-input'
  ]">

    <span v-if="label" class="vsm-label" v-html="label"></span>

    <div :class="[
        optionInline? 'vsm-cols': 'vsm-rows'
    ]">

      <template v-if="options">
        <label v-for="(opt, i) in options" :key="i" class="vsm-checkbox-label">
          <input type="checkbox" class="vsm-checkbox"
            ref="checkbox"
            :class="[css]"
            v-model="currentValue"
            :name="name"
            :value="typeof opt === 'string'? opt: opt.value"
            :disabled="opt.disabled"
            v-on="listeners">
          <span v-html="typeof opt === 'string'? opt: opt.label"></span>
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
          return ['normal', 'slide', 'text'].includes(t);
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
      }
    },
    computed: {
      listeners () {
          const vm = this;
          return Object.assign({}, this.$listeners, {
            change (e) {
              vm.$emit('change', vm.currentValue, e);
            }
          });
      },
      css () {
        return `vsm-checkbox-${this.type}`;
      }
    },
    methods: {
      setValue (value) {
        this.currentValuev = value;
      }
    },
    watch: {
      value (value) {
        this.setValue(value);
      }
    }
}
</script>