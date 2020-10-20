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
            v-model="v"
            :name="name"
            :value="opt.value"
            :disabled="opt.disabled"
            @change="handleChange">
          <span v-html="opt.label"></span>
        </label>
      </template>
      
      <template v-else>
        <label class="vsm-checkbox-label">
          <input type="checkbox" class="vsm-checkbox"
            :class="[css]"
            v-model="v"
            :value="v"
            :name="name"
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
      max: Number | String,
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data () {
      return {

        v: this.value,

      }
    },
    methods: {
      handleChange (e) {
        this.$emit('change', this.v, e);
      }
    },
    computed: {
      css () {
        return `vsm-checkbox-${this.type}`;
      }
    },
    watch: {
        value ( nv ) {
            this.v = nv;
        }
    }
}
</script>