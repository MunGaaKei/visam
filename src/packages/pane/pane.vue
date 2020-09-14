<template>
  <div class="vsm-pane">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmPane',
    data () {
        return {

        }
    }
}
</script>

<style>
.vsm-pane {
    background: var(--background);
}
</style>