<template>
  <i class="iconfont vsm-icon" :class="iconName"></i>
</template>

<script>
export default {
    name: 'vsmIcon',
    props: {
        icon: String,
    },
    computed: {
      iconName () {
        return 'icon-'+ this.icon;
      }
    }
}
</script>

<style>

</style>