<template>
  <div :class="[classes]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmCols',
    props: {
      nowrap: Boolean,
      align: String,
      verticle: Boolean,
    },
    data () {
        return {

        }
    },
    computed: {
      classes () {
        let names = this.align? `vsm-align-${this.align}`: '';
        names += this.nowrap? 'vsm-nowrap': '';
        names += this.verticle? 'vsm-rows': 'vsm-cols';
        return names;
      }
    }
}
</script>