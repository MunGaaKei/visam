<template>
  <div :class="[
      inline? 'vsm-label-inline': 'vsm-label-input'
  ]">

    <span v-if="label" class="vsm-label" v-html="label"></span>

    <div :class="[
        optionInline? 'vsm-cols': 'vsm-rows'
    ]">

      <template v-if="Array.isArray(value)">
        <label v-for="(opt, i) in options" :key="i" class="vsm-checkbox-label">
          <input type="checkbox" class="vsm-checkbox"
            :class="[css]"
            :name="name"
            :value="opt.value"
            :checked="value.includes(opt.value)"
            :disabled="opt.disabled"
            @change="handleChange">
          <span v-html="opt.label"></span>
        </label>
      </template>
      
      <template v-else>
        <label class="vsm-checkbox-label">
          <input type="checkbox" class="vsm-checkbox"
            :class="[css]"
            :value="v"
            :name="name"
            :checked="v"
            @change="handleChange">
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
      max: Number,
    },
    data () {
      return {

        v: this.value,

      }
    },
    methods: {
      handleChange (e) {
        let { checked, value } = e.target;

        if ( this.options ) {
          if ( !Array.isArray(this.v) ) this.v = [];
          console.log(this.v, value );
        } else {
          this.v = checked;
        }

        this.$emit('input', this.v);
        this.$emit('change', this.v);
      }
    },
    computed: {
      css () {
        return `vsm-checkbox-${this.type}`;
      }
    }
}
</script>