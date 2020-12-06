<template>
  <div class="vsm-dropdown">
      <slot></slot>
      <div class="vsm-dropmenu">
          <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'vsmDropdown',
    data () {
        return {

        }
    }
}
</script>