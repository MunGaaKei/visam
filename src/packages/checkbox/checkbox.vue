<template>
  <label class="vsm-checkbox-label">
    <input type="checkbox"
      class="vsm-checkbox"
      :class="[css, {
        'vsm-round': round
      }]"
      :name="name"
      @change="change"
    >
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
    name: 'vsmCheckbox',
    props: {
      value: String | Number | Array,

      name: String,
      type: {
        type: String,
        default: 'normal',
        validator ( t ) {
          return ['normal', 'slide', 'text'].includes(t);
        }
      },
      round: Boolean,
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data () {
      return {
        v: this.value
      }
    },
    created () {
      console.log(this.value, typeof this.value);
    },
    methods: {
      change (e) {
        this.$emit('change', e.target.checked);
      }
    },
    computed: {
      css () {
        return `vsm-checkbox-${this.type}`;
      }
    }
}
</script>