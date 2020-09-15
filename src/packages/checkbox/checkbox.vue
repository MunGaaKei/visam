<template>
  <label class="vsm-checkbox">
    <input type="checkbox">
    <slot></slot>
  </label>
</template>

<script>
export default {
    name: 'vsmCheckbox',
    props: {
      name: String
    }
}
</script>