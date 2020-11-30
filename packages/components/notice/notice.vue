<template>
  <div class="vsm-notice"
    :class="[{
      'vsm-on': show,
      'vsm-reverse': reverse
    }, color? `vsm-${color}`: '']"
    :style="position"
    @click="handleClick">
      <div v-if="html" v-html="html"></div>
      <a v-if="closable === 'button'" class="vsm-close" @click.stop="handleClose"></a>
  </div>
</template>

<script>
export default {
    name: 'vsmNotice',
    methods: {
      handleClick () {
        this.closable === 'self' && this.handleClose();
      },
      handleClose () {
        this.closable && this.close();
      }
    },
}
</script>