<template>
  <label :class="Classes">
      <span v-if="label" class="vsm-label" v-html="label"></span>
      <div class="vsm-group">
        <slot name="before"></slot>
        <input :type="type"
            class="vsm-input vsm-group-item"
            :placeholder="placeholder"
            :readonly="readonly">
        <slot name="after"></slot>
      </div>
  </label>
</template>

<script>
export default {
    name: 'vsmInput',
    props: {
        inline: Boolean,

        label: String,
        labelWidth: String,
        
        placeholder: String,
        type: {
            type: String,
            default: 'text'
        },
        readonly: Boolean,
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