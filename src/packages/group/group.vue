<template>
  <div class="vsm-group">
    <span v-if="label" class="vsm-label" v-html="label"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmGroup',
    props: {
      label: String
    },
    methods: {
      bindGroupClass () {
          let $s = this.$slots;
          for (let k in $s) {
              $s[k].forEach(node => {
                  node.elm.classList.add('vsm-group-item');
              });
          }
      }
    },
    mounted () {
      this.bindGroupClass();
    },
}
</script>

<style>

</style>