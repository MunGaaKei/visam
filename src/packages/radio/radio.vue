<template>
  <label class="vsm-radio-label">
      <input type="radio" class="vsm-radio" :name="name" :value="value">
      <span class="vsm-label">
          <slot></slot>
      </span>
  </label>
</template>

<script>
export default {
    name: 'vsmRadio',
    props: {
        inline: Boolean,
        name: String,
        value: String | Number,
        
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