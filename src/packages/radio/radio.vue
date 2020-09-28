<template>
  <label :class="Classes">
      <input type="radio">
      <slot></slot>
  </label>
</template>

<script>
export default {
    name: 'vsmRadio',
    props: {
        inline: Boolean
    },
    data () {
        return {
            
        }
    },
    computed: {
        Classes () {
            return {
                'vsm-label-inline': this.inline,
                'vsm-label-input': !this.inline
            }
        }
    }
}
</script>

<style>

</style>