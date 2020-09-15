<template>
  <label class="vsm-checkbox-label">
    <input type="checkbox"
      class="vsm-checkbox vsm-checkbox-normal"
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
      name: String,
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    methods: {
      change (e) {
        this.$emit('change', e.target.checked);
      }
    }
}
</script>